import emptyItem from '../assets/empty_item.png';

import ancientHydroSpear from '../assets/weapons/ancient_hydro_spear.png';
import blazingEdge from '../assets/weapons/blazing_edge.png';
import broom from '../assets/weapons/broom.png';
import candyCaneMultimint from '../assets/weapons/candy_cane_multimint.png';
import candyCaneOrange from '../assets/weapons/candy_cane_orange.png';
import candyCanePeppermint from '../assets/weapons/candy_cane_peppermint.png';
import candyCaneSpearmint from '../assets/weapons/candy_cane_spearmint.png';
import carvedAxe from '../assets/weapons/carved_axe.png';
import chefsKnife from '../assets/weapons/chefs_knife.png';
import classicSword from '../assets/weapons/classic_sword.png';
import cuckooClock from '../assets/weapons/cuckoo_clock.png';
import desertClaymore from '../assets/weapons/desert_claymore.png';
import flowerFlail from '../assets/weapons/flower_flail.png';
import heavyStone from '../assets/weapons/heavy_stone.png';
import kingdomSlayer from '../assets/weapons/kingdom_slayer.png';
import kodachi from '../assets/weapons/kodachi.png';
import maple2x4 from '../assets/weapons/maple_2x4.png';
import newspaper from '../assets/weapons/newspaper.png';
import oak2x4 from '../assets/weapons/oak_2x4.png';
import oilDagger from '../assets/weapons/oil_dagger.png';
import rapier from '../assets/weapons/rapier.png';
import recurveBow from '../assets/weapons/recurve_bow.png';
import romanCandle from '../assets/weapons/roman_candle.png';
import rubberSledge from '../assets/weapons/rubber_sledge.png';
import sailorsSabre from '../assets/weapons/sailors_sabre.png';
import shiverScythe from '../assets/weapons/shiver_scythe.png';
import shoddySword from '../assets/weapons/shoddy_sword.png';
import spiritForce from '../assets/weapons/spirit_force.png';
import treeTrimmer from '../assets/weapons/tree_trimmer.png';
import whip from '../assets/weapons/whip.png';
import woodenStick from '../assets/weapons/wooden_club.png';

import anniversaryHat from '../assets/hats/anniversary_hat.png';
import bitHat from '../assets/hats/bit_hat.png';
import bleepHorns from '../assets/hats/bleeps_horns.png';
import bowlerHat from '../assets/hats/bowler_hat.png';
import demonMask from '../assets/hats/demon_mask.png';
import earmuffs from '../assets/hats/earmuffs.png';
import fadedMask from '../assets/hats/faded_mask.png';
import headband from '../assets/hats/fighters_headband.png';
import fieryFalconVeil from '../assets/hats/fiery_falcon_veil.png';
import flowerPin from '../assets/hats/flower_pin.png';
import foxEars from '../assets/hats/fox_ears.png';
import gmHelm from '../assets/hats/gm_helm.png';
import goldfishBandana from '../assets/hats/goldfish_bandana.png';
import hairband from '../assets/hats/hairband.png';
import hardHat from '../assets/hats/hard_hat.png';
import headguard from '../assets/hats/headguard.png';
import headphones from '../assets/hats/headphones.png';
import heliHat from '../assets/hats/heli_hat.png';
import leafHat from '../assets/hats/leaf_hat.png';
import newspaperHat from '../assets/hats/newspaper_hat.png';
import ninjaCover from '../assets/hats/ninja_cover.png';
import oniMask from '../assets/hats/oni_mask.png';
import pot from '../assets/hats/pot.png';
import raindeerAntlers from '../assets/hats/raindeer_antlers.png';
import redStainedMask from '../assets/hats/red-stained_mask.png';
import ribbow from '../assets/hats/ribbow.png';
import rudolfAntlers from '../assets/hats/rudolfs_antlers.png';
import sharkHelm from '../assets/hats/shark_helm.png';
import soldiersCap from '../assets/hats/soldiers_cap.png';
import santaHat from '../assets/hats/santa_hat.png';
import snowHat from '../assets/hats/snow_hat.png';
import spiritMask from '../assets/hats/spirit_mask.png';
import strawHat from '../assets/hats/straw_hat.png';
import tenGallonHat from '../assets/hats/10_gallon_hat.png';
import truffleTop from '../assets/hats/truffle_top.png';
import vintageHat from '../assets/hats/vintage_hat.png';
import witchsHat from '../assets/hats/witchs_hat.png';
import wizardsHat from '../assets/hats/wizards_hat.png';
import woodenMask from '../assets/hats/wooden_mask.png';
import wrensRoost from '../assets/hats/wrens_roost.png';

import emptyMob from '../assets/mob/_empty_mob.png';
import blig from '../assets/mob/blig.png';
import flowa from '../assets/mob/flowa.png';
import guardian from '../assets/mob/forest_guardian.png';
import ninja from '../assets/mob/ninja.png';
import spirit from '../assets/mob/spirit.png';
import elder from '../assets/mob/elder.png';
import fox from '../assets/mob/fox.png';
import rizard from '../assets/mob/rizard.png';
import soldier from '../assets/mob/soldier.png';
import castleGuard from '../assets/mob/royal_guard.png';
import jeff from '../assets/mob/desert_sweeper.png';
import carl from '../assets/mob/desert_ranger.png';
import bleep from '../assets/mob/bleep.png';
import normalBird from '../assets/mob/normal_bird.png';
// import bigPresent from '../assets/mob/bigpresent.png';
// import grinch from '../assets/mob/grinch.png';
// import santa from '../assets/mob/santa.png';
// import weakChest from '../assets/mob/weak_chest.png';

const getWeaponImageFromName = (name) => {
  if (name === 'Ancient Hydro Spear') return ancientHydroSpear;
  else if (name === 'Agos Illusion') return emptyItem;
  else if (name === 'Blazing Edge') return blazingEdge;
  else if (name === 'Broom') return broom;
  else if (name === 'Orangemint Candy Cane') return candyCaneOrange;
  else if (name === 'Multimint Candy Cane') return candyCaneMultimint;
  else if (name === 'Peppermint Candy Cane') return candyCanePeppermint;
  else if (name === 'Spearmint Candy Cane') return candyCaneSpearmint;
  else if (name === 'Carved Axe') return carvedAxe;
  else if (name === "Chef's Knife") return chefsKnife;
  else if (name === 'Classic Sword') return classicSword;
  else if (name === 'Cuckoo Clock') return cuckooClock;
  else if (name === 'Desert Claymore') return desertClaymore;
  else if (name === 'Flower Flail') return flowerFlail;
  else if (name === 'Heavy Stone') return heavyStone;
  else if (name === 'Kingdom Slayer') return kingdomSlayer;
  else if (name === 'Kodachi') return kodachi;
  else if (name === 'Maple 2x4') return maple2x4;
  else if (name === 'Newspaper') return newspaper;
  else if (name === 'Oak 2x4') return oak2x4;
  else if (name == 'Oil Dagger') return oilDagger;
  else if (name === 'Rapier') return rapier;
  else if (name === 'Recurve Bow') return recurveBow;
  else if (name === 'Roman Candle') return romanCandle;
  else if (name === 'Rubber Sledge') return rubberSledge;
  else if (name === 'Shiver Scythe') return shiverScythe;
  else if (name === 'Shoddy Sword') return shoddySword;
  else if (name === 'Spirit Force') return spiritForce;
  else if (name == 'Tree Trimmer') return treeTrimmer;
  else if (name === 'Whip') return whip;
  else if (name === 'Wooden Stick') return woodenStick;
  else if (name === "Sailor's Sabre") return sailorsSabre;
  else return emptyItem;
};

const getHatImageFromName = (name) => {
  if (name === '10 Gallon Hat') return tenGallonHat;
  else if (name === 'Anniversary Hat') return anniversaryHat;
  else if (name === 'Bit Hat') return bitHat;
  else if (name === "Bleep's Horns") return bleepHorns;
  else if (name === 'Bowler Hat') return bowlerHat;
  else if (name === 'Demon Mask') return demonMask;
  else if (name === 'Earmuffs') return earmuffs;
  else if (name === 'Faded Mask') return fadedMask;
  else if (name === 'Fiery Falcon Veil') return fieryFalconVeil;
  else if (name === "Fighter's Headband") return headband;
  else if (name === 'Flower Pin') return flowerPin;
  else if (name === 'Fox Ears') return foxEars;
  else if (name === 'GM Helm -J-') return gmHelm;
  else if (name === 'Goldfish Bandana') return goldfishBandana;
  else if (name === 'Hairband') return hairband;
  else if (name === 'Hard Hat') return hardHat;
  else if (name === 'Headguard') return headguard;
  else if (name === 'Headphones') return headphones;
  else if (name === 'HeliHat') return heliHat;
  else if (name === 'HYGFBN3') return emptyItem;
  else if (name === 'Leaf Hat') return leafHat;
  else if (name === 'Mighty Keeper Helmet') return emptyItem;
  else if (name === 'Newspaper Hat') return newspaperHat;
  else if (name === 'Ninja Cover') return ninjaCover;
  else if (name === 'Oni Mask') return oniMask;
  else if (name === 'Pot') return pot;
  else if (name === 'Red Stained Mask') return redStainedMask;
  else if (name === 'Reindeer Antlers') return raindeerAntlers;
  else if (name === 'Ribbow') return ribbow;
  else if (name === "Rudolf's Antlers") return rudolfAntlers;
  else if (name === "Santa's Hat") return santaHat;
  else if (name === 'Shark Helm') return sharkHelm;
  else if (name === 'Snow Hat') return snowHat;
  else if (name === "Soldier's Cap") return soldiersCap;
  else if (name === 'Sorceress Hat') return wizardsHat;
  else if (name === 'Spirit Mask') return spiritMask;
  else if (name === 'Straw Hat') return strawHat;
  else if (name === 'Truffle Top') return truffleTop;
  else if (name === 'Vintage Hat') return vintageHat;
  else if (name === 'Wise Sentry Helmet') return emptyItem;
  else if (name === "Witch's Hat") return witchsHat;
  else if (name === 'Wooden Mask') return woodenMask;
  else if (name === "Wren's Roost") return wrensRoost;
  else return emptyItem;
};

const getMobImageFromName = (name) => {
  if (name === 'Blig') return blig;
  else if (name === 'Novice Blig') return blig;
  else if (name === 'Bleep') return bleep;
  else if (name === 'Flowa') return flowa;
  else if (name === 'Forest Guardian') return guardian;
  else if (name === 'Ninja') return ninja;
  else if (name === 'Forest Spirit') return spirit;
  else if (name === 'Elder Spirit') return elder;
  else if (name === 'Spirit Minion') return emptyMob;
  else if (name === 'Forest Bird') return normalBird;
  else if (name === 'Rare Forest Bird') return emptyMob;
  else if (name === 'Arctic Fox') return fox;
  else if (name === 'Rizard') return rizard;
  else if (name === 'Soldier') return soldier;
  else if (name === 'Volunteer Castle Guard') return castleGuard;
  else if (name === 'Trainee Castle Guard') return castleGuard;
  else if (name === 'Standard Castle Guard') return castleGuard;
  else if (name === 'Elite Castle Guard') return castleGuard;
  else if (name === 'Distinguished Castle Guard') return castleGuard;
  else if (name === 'Noble Castle Guard') return castleGuard;
  else if (name === 'Royal Castle Guard') return castleGuard;
  else if (name === 'Wise Gatekeeper') return emptyMob;
  else if (name === 'Mighty Gatekeeper') return emptyMob;
  else if (name === 'Castle Sorceress') return emptyMob;
  else if (name === 'Desert Dweller') return jeff;
  else if (name === 'Desert Rancher') return carl;
  else if (name === 'Desert Enforcer') return emptyMob;
  else if (name === 'Colossal Urchin') return emptyMob;
  else if (name === 'Rogue GM') return emptyMob;
  else return emptyMob;
};

export { getWeaponImageFromName, getHatImageFromName, getMobImageFromName };
