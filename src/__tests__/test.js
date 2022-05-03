import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Character from '../js/character';

test('attack', () => {
  const mag = new Magician('Rick');
  mag.interval = 5;
  mag.currentAttack = 20;
  expect(mag.attack).toBe(12);
});

test('attack', () => {
  const daemon = new Daemon('Rick');
  daemon.interval = 5;
  daemon.currentAttack = 64;
  daemon.dope = true;

  expect(daemon.attack).toBe(33);
});

test('attack', () => {
  const daemon = new Daemon('Rick');
  daemon.interval = 5;
  daemon.currentAttack = -10;

  expect(daemon.attack).toBe(0);
});

test('name less than 2 letters', () => {
  const expected = 'Неверные данные';
  expect(() => new Character('D', 'Daemon')).toThrowError(expected);
});

test('name more than 10 letterss', () => {
  const expected = 'Неверные данные';
  expect(() => new Character('FlorentiusV', 'Undead')).toThrowError(expected);
});

test('name is not a string', () => {
  const expected = 'Неверные данные';
  expect(() => new Character(1234, 'Magician')).toThrowError(expected);
});

test('non-existent type', () => {
  const expected = 'Неверные данные';
  expect(() => new Character('David', 'Bowie')).toThrowError(expected);
});
