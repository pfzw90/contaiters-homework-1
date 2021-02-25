import Character from '../character';
import Team from '../team';


test('test Team', () => {
  const testTeam = new Team();
  const testChar1 = new Character('mage', '1', 'mage');
  const testChar2 = new Character('swordsman', '2', 'swordsman');
  const testChar3 = new Character('swordsman', '2', 'swordsman');
  const testChar4 = new Character('archer', '3', 'archer');

  testTeam.add(testChar1);
  expect(testTeam.toArray()[0]).toBe(testChar1);

  testTeam.add(testChar2);
  expect(testTeam.toArray()).toEqual([testChar1, testChar2]);

  expect(() => {
    testTeam.add(testChar3);
  }).toThrowError(new Error('Такой персонаж уже есть в команде'));

  testTeam.addAll(testChar3, testChar4);
  expect(testTeam.toArray()).toEqual([testChar1, testChar2, testChar3, testChar4]);
});
