export default class HiveState extends window.Run.Jig {

  init() {
   this.hiveOrigins = [];
  }

  addHive(origin) {
    this.hiveOrigins.push(origin);
  }

}
