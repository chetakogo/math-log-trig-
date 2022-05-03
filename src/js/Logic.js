import Character from './character';

export default class Logic extends Character {
  constructor(name, type, interval) {
    super(name, type);
    this.interval = interval;
    this.dope = false;
  }

  set stoned(value) {
    this.cdope = value;
  }

  get stoned() {
    return this.cdope;
  }

  set attack(value) {
    this.currentAttack = value;
  }

  get attack() {
    let damage = this.currentAttack * ((11 - this.interval) / 10);

    if (this.dope) {
      damage -= (this.currentAttack - Math.log2(this.interval) * 5);
    }
    if (this.attack > 0) {
      return Math.round(damage);
    }
    return 0;
  }
}
