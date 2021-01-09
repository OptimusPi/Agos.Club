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
import sailorsSabre from '../assets/hats/sailors_sabre.png';
import ancientHydroSpear from '../assets/hats/ancient_hydro_spear.png';
import desertClaymore from '../assets/hats/desert_claymore.png';

import anniversaryHat from '../assets/hats/anniversary_hat.png';
import bitHat from '../assets/hats/bit_hat.png';
import bleepHorns from '../assets/hats/bleeps_horns.png';
import bowlerHat from '../assets/hats/bowler_hat.png';
import demonMask from '../assets/hats/demon_mask.png';
import earmuffs from '../assets/hats/earmuffs.png';
import fadedMask from '../assets/hats/faded_mask.png';
import headband from '../assets/hats/fighters_headband.png';
import flowerPin from '../assets/hats/flower_pin.png';
import foxEars from '../assets/hats/fox_ears.png';
import hairband from '../assets/hats/hairband.png';
import hardHat from '../assets/hats/hard_hat.png';
import headguard from '../assets/hats/headguard.png';
import headphones from '../assets/hats/headphones.png';
import heliHat from '../assets/hats/heli_hat.png';
import leafHat from '../assets/hats/leaf_hat.png';
import newspaperHat from '../assets/hats/newspaper_hat.png';
import ninjaCover from '../assets/hats/ninja_cover.png';
import pot from '../assets/hats/pot.png';
import raindeerAntlers from '../assets/hats/raindeer_antlers.png';
import redStainedMask from '../assets/hats/red-stained_mask.png';
import ribbow from '../assets/hats/ribbow.png';
import rudolfAntlers from '../assets/hats/rudolfs_antlers.png';
import santaHat from '../assets/hats/santa_hat.png';
import snowHat from '../assets/hats/snow_hat.png';
import spiritMask from '../assets/hats/spirit_mask.png';
import strawHat from '../assets/hats/straw_hat.png';
import truffleTop from '../assets/hats/truffle_top.png';
import vintageHat from '../assets/hats/vintage_hat.png';
import woodenMask from '../assets/hats/wooden_mask.png';
import soldiersCap from '../assets/hats/soldiers_cap.png';

const getWeaponImageFromName = (name) => {
  if (name === 'Broom') return broom;
  else if (name === 'Orangemint Candy Cane') return empty;
  else if (name === 'Multimint Candy Cane') return candyCaneMultimint;
  else if (name === 'Peppermint Candy Cane') return candyCanePeppermint;
  else if (name === 'Spearmint Candy Cane') return candyCaneSpearmint;
  else if (name === 'Carved Axe') return carvedAxe;
  else if (name === "Chef's Knife") return chefsKnife;
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
  else if (name === "Sailor's Sabre") return sailorsSabre;
  else if (name === 'Ancient Hydro Spear') return ancientHydroSpear;
  else if (name === 'Desert Claymore') return desertClaymore;
  else return empty;
};

const getHatImageFromName = (name) => {
  if (name === 'Anniversary Hat') return anniversaryHat;
  else if (name === 'Bit Hat') return bitHat;
  else if (name === 'Bleeps Horns') return bleepHorns;
  else if (name === 'Bowler Hat') return bowlerHat;
  else if (name === 'Demon Mask') return demonMask;
  else if (name === 'Earmuffs') return earmuffs;
  else if (name === 'Faded Mask') return fadedMask;
  else if (name === "Fighter's Headband") return headband;
  else if (name === 'Flower Pin') return flowerPin;
  else if (name === 'Fox Ears') return foxEars;
  else if (name === 'Hairband') return hairband;
  else if (name === 'Hard Hat') return hardHat;
  else if (name === 'Headguard') return headguard;
  else if (name === 'Headphones') return headphones;
  else if (name === 'Heli Hat') return heliHat;
  else if (name === 'Leaf Hat') return leafHat;
  else if (name === 'Newspaper Hat') return newspaperHat;
  else if (name === 'Ninja Cover') return ninjaCover;
  else if (name === 'Oni Mask') return empty;
  else if (name === 'Pot') return pot;
  else if (name === 'Red-stained Mask') return redStainedMask;
  else if (name === 'Reindeer Antlers') return raindeerAntlers;
  else if (name === 'Ribbow') return ribbow;
  else if (name === "Rudolf's Antlers") return rudolfAntlers;
  else if (name === "Santa's Hat") return santaHat;
  else if (name === 'Snow Hat') return snowHat;
  else if (name === "Soldier's Cap") return soldiersCap;
  else if (name === 'Spirit Mask') return spiritMask;
  else if (name === 'Straw Hat') return strawHat;
  else if (name === 'Truffle Top') return truffleTop;
  else if (name === 'Vintage Hat') return vintageHat;
  else if (name === "Witch's Hat") return empty;
  else if (name === 'Wooden Mask') return woodenMask;
  else if (name === "Wren's Roost") return empty;
  else return empty;
};

export { getWeaponImageFromName, getHatImageFromName };
