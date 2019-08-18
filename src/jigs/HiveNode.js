export default class HiveNode extends window.Run.Jig {

  init(name, owner, url, mediaData, previousNode) {
    this.name = name;
    this.owner = owner;
    this.url = url;
    this.mediaData = mediaData;
    this.previousNode = previousNode;
  }
}
