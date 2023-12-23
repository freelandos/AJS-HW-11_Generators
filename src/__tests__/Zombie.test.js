import Zombie from '../Zombie.js';

describe('Zombie class', () => {
  it('should create a character with correct properties', () => {
    const character = new Zombie('Anton');

    expect(character).toEqual({
      name: 'Anton',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    });
  });
});
