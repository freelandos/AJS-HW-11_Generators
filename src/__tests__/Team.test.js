import Team from '../Team.js';

const character1 = {
  name: 'Anton',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

const character2 = {
  name: 'Ivan',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

describe('Team class', () => {
  it('should add a character to the team', () => {
    const team = new Team();
    team.add(character1);
    const expected = new Set([character1]);

    expect(team.members).toEqual(expected);
  });

  it('should throw an error if the character is already on the team', () => {
    const team = new Team();
    team.add(character1);

    expect(() => team.add(character1)).toThrow('The character is already on the team');
  });

  it('should add arbitrary number of characters to the team', () => {
    const team = new Team();
    team.addAll(character1, character2, character2);
    const expected = new Set([character1, character2]);

    expect(team.members).toEqual(expected);
  });

  it('should convert set to array', () => {
    const team = new Team();
    team.add(character1);
    team.toArray();

    expect(Array.isArray(team.members)).toBe(true);
  });
});
