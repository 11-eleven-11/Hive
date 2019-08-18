export default class Hive extends window.Run.Jig {
  init(name, description, owner, category, satoshis, image) {
    this.name = name;
    this.description = description;
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
