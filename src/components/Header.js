import React from 'react';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Icon } from '@material-ui/core';
import { useAtomicStyles } from '../utils/styles';
import { motion } from 'framer-motion';
import cloudUri from '../assets/clouds.png';

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
        key={cloudUri}
        src={cloudUri}
        animate={{ translateX: [0, width - 380, 0] }}
        transition={{ duration: 60, loop: Infinity, repeatDelay: 2, delay: 2, ease: 'linear' }}
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
