export default class Hive extends window.Run.Jig {
  init(name, owner, category, satoshis, image) {
    this.name = name;
    this.owner = owner;
    this.owners = [];
    this.owners.push(owner);
    this.category = category;
    this.satoshis = satoshis;
    this.image = image;
  }

  addOwner(owner) {
    this.owners.push(owner);
  }

  getNumberOfUsers() {
    return this.owners.length;
  }
}
