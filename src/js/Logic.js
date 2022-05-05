import Character from './character';

export default class Logic extends Character {
  constructor(name, type, interval) {
    super(name, type);
    this.interval = interval;
    this.dope = false;
    this.attack = 10;
  }

  set stoned(value) {
    this.dope = value;
  }

  get stoned() {
    return this.dope;
  }

  set attack(value) {
    this.currentAttack = value;
  }

  get attack() {
    let damage = this.currentAttack * ((11 - this.interval) / 10);

    if (this.dope) {
      damage -= Math.log2(this.interval) * 5;
    }
    if (damage > 0) {
      return Math.round(damage);
    }
    return 0;
  }
}
