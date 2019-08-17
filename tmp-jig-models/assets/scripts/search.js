const input = document.getElementsByClassName('search-input')[0]
const error = document.getElementsByClassName('search-error')[0]
const success = document.getElementsByClassName('search-success')[0]
const closeButton = document.getElementsByClassName('close-button')[0]
const searchContainer = document.getElementsByClassName('search-container')[0]
const searchButton = document.getElementById('search-button')

const searchRuns = {
    Mainnet: new Run({ network: 'main', owner: '1KZFvxSD1Tz33onqYeDuEWGcs5hrEdpo8' }),
    Testnet: new Run({ network: 'test' })
}
searchRuns.Mainnet.jigs() // Preload mainnet jigs

function showError(e) {
    console.error(e)
    success.style.visibility = 'hidden'
    error.style.visibility = 'visible'
    error.innerHTML = 'Sorry. We can\'t find this address or identifier.'
}

const networkName = document.getElementById('network-name')
let network = networkName.innerHTML
networkName.onclick = () => {
    network = networkName.innerHTML === 'Testnet' ? 'Mainnet' : 'Testnet'
    networkName.innerHTML = network
    networkName.classList.toggle("flipped")
    if (input.value.length > 0) search()
}

searchButton.onclick = () => {
    document.body.style.overflow = 'hidden'
    searchContainer.classList.add('open')
    setTimeout(() => input.focus(), 100)
}

closeButton.onclick = () => {
    searchContainer.classList.remove('open')
    document.body.style.overflow = 'visible'
}

input.addEventListener('keyup', event => {
    if (event.key === 'Enter') search()
})

function showDiv(root, clazz, innerHTML) {
    const div = document.createElement('div')
    div.classList.add(clazz)
    div.innerHTML = innerHTML
    root.appendChild(div)
    return div
}

function showOwnerFooter(owner) {
    showDiv(success, 'footer', 'owned by')
    const subfooter = document.createElement('div')
    subfooter.classList.add('subfooter')
    success.appendChild(subfooter)
    const subfooterText = document.createElement('div')
    subfooterText.classList.add('subfooter-text')
    const bsvNetwork = network === 'Mainnet' ? 'mainnet' : 'testnet'
    const addr = owner instanceof bsv.Address ? owner.toString() :
        new bsv.PublicKey(owner, { network: bsvNetwork }).toAddress().toString()
    const miniaddr = `${addr.slice(0, 5)}...${addr.slice(addr.length - 5)}`
    subfooterText.innerHTML = miniaddr
    subfooterText.onmouseover = () => { subfooterText.innerHTML = addr }
    subfooterText.onmouseout = () => { subfooterText.innerHTML = miniaddr }
    subfooter.appendChild(subfooterText)
    subfooterText.onclick = () => searchFor(addr)
}

function formatAge(date) {
    const hoursAgo = Math.floor((new Date() - date) / (1000 * 60 * 60))
    const daysAgo = Math.floor(hoursAgo / 24)
    if (hoursAgo === 0) return  'Recently updated'
    else if (hoursAgo < 24) return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`
    else return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`
}

function extractEmoji(type) { return typeof type.icon === 'string' ? type.icon : type.icon.emoji }

function searchFor(text) {
    input.value = text
    input.dispatchEvent(new KeyboardEvent('keyup', { 'key':'Enter' }));
}

function search() {
    if (input.value.length === 0) {
        error.style.visibility = 'hidden'
        return
    }

    success.style.visibility = 'visible'
    error.style.visibility = 'hidden'
    success.innerHTML = ''

    const loading = document.createElement('img')
    loading.classList.add('loading')
    loading.src = 'assets/images/loading.gif'
    success.appendChild(loading)

    searchForAddress()
        .catch(e => searchForJigOrClass()
            .catch(e => showError(e)))
}

async function searchForAddress() {
    let address
    const bsvNetwork = network === 'Mainnet' ? 'mainnet' : 'testnet'
    try { address = new bsv.PublicKey(input.value, { network: bsvNetwork }).toAddress() }
    catch(e) { address = new bsv.Address(input.value, bsvNetwork) }

    const prevRun = Run.instance
    let userRun, jigs
    try {
        userRun = new Run({
            network: network === 'Mainnet' ? 'main' : 'test',
            owner: address,
            blockchain: searchRuns[network].blockchain
        })
        jigs = await userRun.jigs()
    } finally { prevRun.activate() }

    if (jigs.length === 0) {
        success.innerHTML = 'No jigs';
        return
    }

    const ages = await Promise.all(jigs.map(jig =>
        userRun.blockchain.fetch(jig.location.slice(0, 64)).then(tx => tx.time)))

    const entries = ages.map((age, n) => [jigs[n], new Date(age)])
    entries.sort((a, b) => a[1] - b[1])

    success.innerHTML = ''

    showDiv(success, 'title', 'Owner')
    showDiv(success, 'subtitle', `[${jigs.length} jig${jigs.length > 1 ? 's' : ''}]`)

    entries.forEach(([jig, date]) => {
        const row = document.createElement('div')
        row.classList.add('jig-summary')

        const name = document.createElement('div')
        name.classList.add('jig-name')
        name.innerText = jig.constructor.name
        if (jig.constructor.icon) {
            let emoji = ''
            if (typeof jig.constructor.icon === 'string') {
                emoji = twemoji.parse(jig.constructor.icon)
            } else {
                emoji = twemoji.parse(jig.constructor.icon.emoji)
            }
            name.innerHTML = `${emoji}${name.innerHTML}`
        }
        row.appendChild(name)

        const age = document.createElement('div')
        age.classList.add('jig-age')
        age.innerHTML = `[${formatAge(date)}]`
        age.onclick = () => {
            input.value = jig.location
            input.dispatchEvent(new KeyboardEvent('keyup', { 'key':'Enter' }));
        } 

        row.appendChild(age)

        success.appendChild(row)
    })
}

async function searchForJigOrClass() {
    const prevRun = Run.instance
    let run = null, result = null
    try {
        run = searchRuns[network].activate()
        result = await run.load(input.value)
    } finally { prevRun.activate() }
    const tx = await run.blockchain.fetch(result.location.slice(0, 64))
    if (result instanceof Jig)
        showJig(run, result, tx)
    else
        showCode(run, result, tx)
}

async function showJig(run, jig, tx) {
    success.innerHTML = ''

    const alphabet = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`1234567890-=~!@#$%^&*()_+,./;\'[]\\<>?:"{}|'
    const shuffled = 't08sY]m\'#$Dy1`}pCKrHG)f9[uq%3\\ha=!ZVMkJ-*L"xz67R? W~@wdO:Ecg|ITe52.+{ovBj>(&,/Q4lA;^<NPnXSFi_Ub'
    const encArr = alphabet.split(''); const decArr = shuffled.split('')
    function decrypt (s) { return s.split('').map(c => encArr[decArr.indexOf(c)]).join('') }

    function formatMethod(data) {
        let simple = true;
        const used = new Set()
        data.actions.forEach(action => {
            if (action.method !== 'init' && used.has(action.source)) { simple = false }
            if (action.args.indexOf('"ref"') !== -1) { simple = false }
            if (action.method !== 'init') { used.add(action.source) }
        })
        if (data.actions.length > 1 && !simple) { return 'multiple actions' }
        if (data.jigs > 1 && !simple) { return 'complex action' }
        const n = data.actions.length > 1 ? parseInt(jig.location.slice(66)) - data.defs.length - 1 : 0
        function arg(a) { if (typeof a === 'object') { return '...' } else { return JSON.stringify(a) }}
        return `${data.actions[n].method}(${data.actions[n].args.map(a => arg(a)).join(', ')})`
    }

    const date = new Date(tx.time)
    const data = JSON.parse(decrypt(tx.outputs[0].script.chunks[4].buf.toString('utf8')))

    showDiv(success, 'title', 'Jig')
    showDiv(success, 'icon', twemoji.parse(extractEmoji(jig.constructor)))
    const className = showDiv(success, 'subtitle', jig.constructor.name)
    showDiv(success, 'transaction-age', formatAge(date))
    showDiv(success, 'transaction-method', formatMethod(data))

    className.classList.add('jig-class-name')
    className.onclick = () => searchFor(jig.constructor.location)

    success.appendChild(document.createElement('hr'))

    Object.keys(jig).forEach(key => {
        const hidden = ['origin', 'location', 'owner', 'satoshis']
        if (hidden.includes(key)) { return }

        const row = document.createElement('div')
        row.classList.add('jig-summary')

        showDiv(row, 'property-name', key)
        showDiv(row, 'property-value', jig[key])

        success.appendChild(row)
    })

    success.appendChild(document.createElement('hr'))
    showOwnerFooter(jig.owner)
}

async function showCode(run, code, tx) {
    success.innerHTML = ''

    const title = `${code.toString().startsWith('function') ? 'Function' : 'Class'} definition`

    showDiv(success, 'title', title)
    showDiv(success, 'icon', twemoji.parse(extractEmoji(code)))
    showDiv(success, 'subtitle', code.name)
    showDiv(success, 'transaction-age', formatAge(new Date(tx.time)))

    const preElem = document.createElement('pre')
    const codeElem = document.createElement('code')
    codeElem.classList.add('language-javascript')
    codeElem.innerHTML = code.toString()
    preElem.appendChild(codeElem)
    success.appendChild(preElem)
    Prism.highlightAll()

    success.appendChild(document.createElement('hr'))

    Object.keys(code).forEach(key => {
        const hidden = ['origin', 'location', 'owner', 'originMainnet', 'originTestnet', 'originStn',
            'originMocknet', 'locationMainnet', 'locationTestnet', 'locationStn', 'locationMocknet',
            'ownerMainnet', 'ownerTestnet', 'ownerStn', 'ownerMocknet']
        if (hidden.includes(key)) { return }

        const row = document.createElement('div')
        row.classList.add('jig-summary')

        showDiv(row, 'property-name', key)
        showDiv(row, 'property-value', code[key])

        success.appendChild(row)
    })

    success.appendChild(document.createElement('hr'))
    const bsvNetwork = network === 'Mainnet' ? 'mainnet' : 'testnet'
    const addr = tx.outputs[parseInt(code.location.slice(66))].script.toAddress(bsvNetwork)
    showOwnerFooter(addr)
}