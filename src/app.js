import Team from './Team.js';
import Bowman from './Bowman.js';
import Daemon from './Daemon.js';
import Magician from './Magician.js';
import Swordsman from './Swordsman.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';

const team = new Team();

const bowman = new Bowman('Bowman');
const daemon = new Daemon('Daemon');
const magician = new Magician('Magician');
const swordsman = new Swordsman('Swordsman');
const undead = new Undead('Undead');
const zombie = new Zombie('Zombie');

team.addAll(bowman, daemon, magician, swordsman, undead, zombie);

for (const member of team) {
  console.log(member);
}
