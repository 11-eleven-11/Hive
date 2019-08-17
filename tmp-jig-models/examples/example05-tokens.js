/**
 * This example demonstrates creating a customized fungible token and
 * sending it between two friends.
 * 
 * To run, execute `node example05-tokens.js` from its directory.
 */

const Run = require('../dist/run.node.min')
const bsv = require('bsv')
const { Token } = Run

const run = new Run({ network: 'mock' })

async function main() {

    class Gold extends Token {
        init(amount, tokens) {
            super.init(amount, tokens)
            this.source = 'Bitcoinland'
            this.quality = 'Excellent'
        }
    }

    const gold = await new Gold(100).sync()

    // Send a friend two tokens of gold
    const alicePubkey = new bsv.PrivateKey().toPublicKey().toString()
    const aliceGold1 = gold.send(20, alicePubkey)
    const aliceGold2 = gold.send(30, alicePubkey)

    // Our gold should now be 50, and so should our friend's, but our
    // friend has their gold in two tokens. Let's combine them.
    const aliceGold = new Gold(50, [aliceGold1, aliceGold2])

    // Now friendsGold1 and friendsGold2 are empty and gone.
    // All of their gold has been transferred to friend gold

    // We as the owner of the original gold token can also mint
    // new gold. Only the minter can do this.
    gold.mint(30)

    console.log('Mine:', gold.amount) // 80
    console.log('Alice:', aliceGold.amount) // 50

}

main().catch(e => console.error(e))