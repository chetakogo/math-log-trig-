import Logic from './Logic';

export default class Daemon extends Logic {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
