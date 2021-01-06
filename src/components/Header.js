import React from 'react';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AppLogo from '../assets/logo.png';
import { useAtomicStyles } from '../utils/styles';

export default function Header() {
  const ac = useAtomicStyles();

  return (
    <div className={ac['flex-grow']}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={ac['header-icon']} aria-label="home">
              <img src={AppLogo} width="32" height="32" alt="Home" />
            </IconButton>
          </Link>
          <Typography variant="h6" className={ac['mr-1']}>
            Agos.Club
          </Typography>
          <Typography variant="overline" className={cl(ac['italic'], ac['flex-grow'])}>
            (v1.0)
          </Typography>
          <Link to="/maps">
            <Button startIcon={<AddBoxIcon />} className={cl(ac['header-icon'], ac['mr-1'])}>
              Maps
            </Button>
          </Link>
          <Link to="/weapons">
            <Button startIcon={<AddBoxIcon />} className={cl(ac['header-icon'], ac['mr-1'])}>
              Weapons
            </Button>
          </Link>
          <Link to="/hats">
            <Button startIcon={<AddBoxIcon />} className={cl(ac['header-icon'], ac['mr-1'])}>
              Hats
            </Button>
          </Link>
          <Link to="/beasts">
            <Button startIcon={<AddBoxIcon />} className={cl(ac['header-icon'], ac['mr-1'])}>
              Beasts
            </Button>
          </Link>
          <Link to="/misc">
            <Button startIcon={<AddBoxIcon />} className={cl(ac['header-icon'], ac['mr-1'])}>
              Misc
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
