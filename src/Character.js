export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name should be between 2 and 10 characters');
    }

    if (!['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Invalid character type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character');
    }

    this.health = 100;
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
      this.health = 0;
    }
  }
}
