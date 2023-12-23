import Bowman from '../Bowman.js';

describe('Bowman class', () => {
  it('should create a character with correct properties', () => {
    const character = new Bowman('Anton');

    expect(character).toEqual({
      name: 'Anton',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});
