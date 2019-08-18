export default class HiveNode extends window.Run.Jig {

  init(name, description, owner, url, image, hiveOrigin, previousNode) {
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.url = url;
    this.image = image;
    this.hiveOrigin = hiveOrigin;
    this.previousNode = previousNode;
  }

}
