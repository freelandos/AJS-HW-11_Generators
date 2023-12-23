import Magician from '../Magician.js';

describe('Magician class', () => {
  it('should create a character with correct properties', () => {
    const character = new Magician('Anton');

    expect(character).toEqual({
      name: 'Anton',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});
