import { Model } from "../model";

class Egg extends Model {
  path() {
    return `M 427 ${this.height} Q 327 ${this.height / 3} 213.5 ${this.height} Q 100 ${
      this.height / 3
    } 0 ${this.height} Q 50 0 427 0 Q 750 0 854 ${this.height} Q 727 ${
      this.height / 3
    } 639.5 ${this.height} Q 527 ${this.height / 3} 427 ${this.height}`;
  }

  render() {
    return `<path fill="${this.color}" ${this.reversal} fill-opacity="1"
          d="${this.path()}"></path>`;
  }
}

export default Egg;
