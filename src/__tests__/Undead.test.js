import Undead from '../Undead.js';

describe('Undead class', () => {
  it('should create a character with correct properties', () => {
    const character = new Undead('Anton');

    expect(character).toEqual({
      name: 'Anton',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});
