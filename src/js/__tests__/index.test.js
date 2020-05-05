/* eslint-disable no-unused-vars */
import Character from '../../index';

test('take damage', () => {
  const peter = new Character('Peter', 'monk');

  const response = peter.damage(100);
  expect(peter).toEqual({
    name: 'Peter', type: 'monk', health: 40, attack: 10, defence: 40,
  });
});

test('heath = 0', () => {
  const peter = new Character('Peter', 'monk');

  const response = peter.damage(1000);
  expect(peter).toEqual({
    name: 'Peter', type: 'monk', health: 0, attack: 10, defence: 40,
  });
});
