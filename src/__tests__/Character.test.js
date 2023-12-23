import Character from '../Character.js';

describe('Character class', () => {
  it('should throw an error if the name is too short', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name should be between 2 and 10 characters');
  });

  it('should throw an error if the name is too long', () => {
    expect(() => new Character('SuperAntonio', 'Bowman')).toThrow('Name should be between 2 and 10 characters');
  });

  it('should throw an error if the type is invalid', () => {
    expect(() => new Character('Anton', 'Spiderman')).toThrow('Invalid character type');
  });

  it('should create a character with correct properties', () => {
    const character = new Character('Anton', 'Bowman');

    expect(character).toEqual({
      name: 'Anton',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: null,
      defence: null,
    });
  });

  it('should throw an error when try level up a dead character', () => {
    const character = new Character('Anton', 'Bowman');
    character.health = 0;

    expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
  });

  it('should level up a character', () => {
    const character = new Character('Anton', 'Bowman');
    character.health = 80;
    character.attack = 25;
    character.defence = 25;
    character.levelUp();

    expect(character).toEqual({
      name: 'Anton',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    });
  });

  it('should cause damage and reduce health', () => {
    const character = new Character('Anton', 'Bowman');
    character.attack = 25;
    character.defence = 25;
    character.damage(20);

    expect(character.health).toBe(85);
  });

  it('should not allow health to drop below 0', () => {
    const character = new Character('Anton', 'Bowman');
    character.attack = 25;
    character.defence = 25;
    character.damage(200);

    expect(character.health).toBe(0);
  });
});
