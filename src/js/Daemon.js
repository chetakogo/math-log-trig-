import Logic from './Logic';

export default class Daemon extends Logic {
  constructor(name, type, interval) {
    super(name, 'Magician', interval);
  }
}
