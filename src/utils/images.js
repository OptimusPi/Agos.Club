import empty from '../assets/weapons/empty.png';
import shoddySword from '../assets/weapons/shoddySword.png';
import rubberSledge from '../assets/weapons/rubberSledge.png';

const getWeaponImageFromName = (name) => {
  if (name === 'Shoddy Sword') return shoddySword;
  else if (name === 'Rubber Sledge') return rubberSledge;
  else return empty;
};

export { getWeaponImageFromName };
