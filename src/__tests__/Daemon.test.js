import Daemon from '../Daemon.js';

describe('Daemon class', () => {
  it('should create a character with correct properties', () => {
    const character = new Daemon('Anton');

    expect(character).toEqual({
      name: 'Anton',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});
