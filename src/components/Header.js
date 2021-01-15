import React from 'react';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Icon } from '@material-ui/core';
import { useAtomicStyles } from '../utils/styles';
import { motion } from 'framer-motion';
import cloudUri from '../assets/clouds_full.png';
import cloud1Uri from '../assets/clouds_1.png';
import cloud2Uri from '../assets/clouds_2.png';
import cloud3Uri from '../assets/clouds_3.png';

import mapsIconUri from '../assets/icons/maps.png';
import weaponsIconUri from '../assets/icons/weapons.png';
import hatsIconUri from '../assets/icons/hats.png';
import mobsIconUri from '../assets/icons/mobs.png';
import moreIconUri from '../assets/icons/more.png';
import logoUri from '../assets/logo.png';

const getIcon = (assetUri, name) => {
  return (
    <Icon style={{ width: 50, height: 50 }}>
      <img alt={name} style={{ width: '100%', height: '100%' }} src={assetUri} />
    </Icon>
  );
};

export default function Header() {
  const ac = useAtomicStyles();
  const [width, setWidth] = React.useState(window.innerWidth);
  console.log(window.innerWidth);

  const handleResize = (e) => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    handleResize();
  });

  window.addEventListener('resize', handleResize);

  return (
    <div className={ac['flex-grow']}>
      <motion.img
        key="Cloud1"
        src={cloudUri}
        animate={{
          translateX: [0, width - 380, 0],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 220, loop: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud2"
        src={cloud1Uri}
        animate={{
          translateX: [(width - 137) / 2 + 137 / 2, 0, width - 137, (width - 137) / 2 + 137 / 2],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 210, loop: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud3"
        src={cloud2Uri}
        animate={{
          translateX: [(width - 189) / 2 - 189, width - 189, 0, (width - 189) / 2 - 189],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 200, loop: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud4"
        src={cloudUri}
        animate={{
          translateX: [width - 380, 0, width - 380],
          translateY: [0, -5, 0, -5, 0, -5, 0, -5, 0, -5, 0],
        }}
        transition={{ duration: 190, loop: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud5"
        src={cloud3Uri}
        animate={{
          translateX: [562, 0, width - 62, 562],
          translateY: [0, -5, 0, -5, 0],
        }}
        transition={{ duration: 150, loop: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <motion.img
        key="Cloud6"
        src={cloud3Uri}
        animate={{
          translateX: [width - 562, width - 62, 0, width - 562],
          translateY: [0, -5, 0, -5, 0],
        }}
        transition={{ duration: 1700, loop: Infinity, repeatDelay: 0, delay: 0 }}
        style={{ position: 'absolute', marginTop: 3 }}
      />
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Icon edge="start" aria-label="home">
              <img src={logoUri} height="50" alt="Home" />
            </Icon>
          </Link>
          <Link to="/">
            <Typography variant="h6" color="secondary" className={ac['mr-2']}>
              .Club
            </Typography>
          </Link>
          <Typography variant="subtitle2" color="secondary" className={ac['flex-grow']}>
            An{' '}
            <a href="https://agos.world" rel="noreferrer" target="_blank">
              Agos
            </a>{' '}
            Fansite
          </Typography>
          <Link to="/maps">
            <Button className={cl(ac['mr-1'])} startIcon={getIcon(mapsIconUri, 'maps')}>
              Maps
            </Button>
          </Link>
          <Link to="/weapons">
            <Button className={cl(ac['mr-1'])} startIcon={getIcon(weaponsIconUri, 'weapons')}>
              Weapons
            </Button>
          </Link>
          <Link to="/hats">
            <Button className={cl(ac['mr-1'])} startIcon={getIcon(hatsIconUri, 'hats')}>
              Hats
            </Button>
          </Link>
          <Link to="/mobs">
            <Button className={cl(ac['mr-1'])} startIcon={getIcon(mobsIconUri, 'mobs')}>
              Mobs
            </Button>
          </Link>
          <Link to="/more">
            <Button className={cl(ac['mr-1'])} startIcon={getIcon(moreIconUri, 'more')}>
              More
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
