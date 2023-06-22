export default class HaikuChecker {
  constructor(haiku) {
    this.haiku = haiku;
  }

  isThreeLines() {
    const lines = this.haiku.trim().split('\n');
    if (lines.length === 3) {
      return true;
    }
    return false;
  }

}
