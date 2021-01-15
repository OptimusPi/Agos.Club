import jsonData from '../assets/data.json';

const dataObject = () => JSON.parse(JSON.stringify(jsonData));

export const getWeaponData = () => {
  return dataObject().weapons;
};

export const getHatData = () => {
  return dataObject().hats;
};

export const getMobData = () => {
  return dataObject().mobs;
};
