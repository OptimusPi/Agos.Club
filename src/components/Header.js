import React from 'react';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Icon, IconButton } from '@material-ui/core';
import { useAtomicStyles } from '../utils/styles';

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

  return (
    <div className={ac['flex-grow']}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Icon edge="start" aria-label="home">
              <img src={logoUri} height="50" alt="Home" />
            </Icon>
          </Link>
          <Link to="/">
            <Typography variant="h6" color="secondary" className={ac['mr-1']}>
              .Club
            </Typography>
          </Link>
          <Typography variant="subtitle3" color="secondary" className={ac['flex-grow']}>
            By TickTockMan
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
