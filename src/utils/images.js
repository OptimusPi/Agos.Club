import empty from '../assets/weapons/empty.png';

import broom from '../assets/weapons/broom.png';
import candyCaneMultimint from '../assets/weapons/candy_cane_multimint.png';
import candyCanePeppermint from '../assets/weapons/candy_cane_peppermint.png';
import candyCaneSpearmint from '../assets/weapons/candy_cane_spearmint.png';
import carvedAxe from '../assets/weapons/carved_axe.png';
import chefsKnife from '../assets/weapons/chefs_knife.png';
import classicSword from '../assets/weapons/classic_sword.png';
import cuckooClock from '../assets/weapons/cuckoo_clock.png';
import flowerFlail from '../assets/weapons/flower_flail.png';
import heavyStone from '../assets/weapons/heavy_stone.png';
import kodachi from '../assets/weapons/kodachi.png';
import maple2x4 from '../assets/weapons/maple_2x4.png';
import newspaper from '../assets/weapons/newspaper.png';
import oak2x4 from '../assets/weapons/oak_2x4.png';
import romanCandle from '../assets/weapons/roman_candle.png';
import rubberSledge from '../assets/weapons/rubber_sledge.png';
import shiverScythe from '../assets/weapons/shiver_scythe.png';
import shoddySword from '../assets/weapons/shoddy_sword.png';
import spiritForce from '../assets/weapons/spirit_force.png';
import whip from '../assets/weapons/whip.png';
import woodenClub from '../assets/weapons/wooden_club.png';

import anniversaryHat from '../assets/hats/anniversary_hat.png';

const getWeaponImageFromName = (name) => {
  if (name === 'Broom') return broom;
  else if (name === 'Candy Cane Multimint') return candyCaneMultimint;
  else if (name === 'Candy Cane Peppermint') return candyCanePeppermint;
  else if (name === 'Candy Cane Spearmint') return candyCaneSpearmint;
  else if (name === 'Carved Axe') return carvedAxe;
  else if (name === 'Chefs Knife') return chefsKnife;
  else if (name === 'Classic Sword') return classicSword;
  else if (name === 'Cuckoo Clock') return cuckooClock;
  else if (name === 'Flower Flail') return flowerFlail;
  else if (name === 'Heavy Stone') return heavyStone;
  else if (name === 'Kodachi') return kodachi;
  else if (name === 'Maple 2x4') return maple2x4;
  else if (name === 'Newspaper') return newspaper;
  else if (name === 'Oak 2x4') return oak2x4;
  else if (name === 'Roman Candle') return romanCandle;
  else if (name === 'Rubber Sledge') return rubberSledge;
  else if (name === 'Shiver Scythe') return shiverScythe;
  else if (name === 'Shoddy Sword') return shoddySword;
  else if (name === 'Spirit Force') return spiritForce;
  else if (name === 'Whip') return whip;
  else if (name === 'Wooden Club') return woodenClub;
  else return empty;
};

const getHatImageFromName = (name) => {
  if (name === 'Anniversary Hat') return anniversaryHat;
  else return empty;
};

export { getWeaponImageFromName, getHatImageFromName };
