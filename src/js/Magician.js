import Logic from './Logic';

export default class Magician extends Logic {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
