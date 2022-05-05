import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Character from '../js/character';

test('attack', () => {
  const mag = new Magician('Rick');
  mag.interval = 5;
  mag.attack = 20;
  expect(mag.attack).toBe(12);
  expect(mag.stoned).toBeFalsy();
});

test('attack with dope', () => {
  const daemon = new Daemon('Rick');
  daemon.interval = 4;
  daemon.attack = 64;
  daemon.stoned = true;

  expect(daemon.attack).toBe(35);
});

test('attack < 0', () => {
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
