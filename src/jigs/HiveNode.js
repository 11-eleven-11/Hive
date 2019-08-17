import Jig from 'run-node';

class HiveNode extends Jig {
  init(name, owner, url, mediaData, previousNode) {
    this.name = name;
    this.owner = owner;
    this.url = url;
    this.mediaData = mediaData;
    this.previousNode = previousNode;
  }
}

export default HiveNode;
