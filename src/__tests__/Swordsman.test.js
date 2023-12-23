import Swordsman from '../Swordsman.js';

describe('Swordsman class', () => {
  it('should create a character with correct properties', () => {
    const character = new Swordsman('Anton');

    expect(character).toEqual({
      name: 'Anton',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});
