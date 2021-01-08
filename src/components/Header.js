import React from 'react';
import cl from 'classnames';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import AppLogo from '../assets/logo.png';
import { useAtomicStyles } from '../utils/styles';

export default function Header() {
  const ac = useAtomicStyles();

  return (
    <div className={ac['flex-grow']}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" aria-label="home">
              <img src={AppLogo} width="32" height="32" alt="Home" />
            </IconButton>
          </Link>
          <Typography variant="h6" color="secondary" className={ac['mr-1']}>
            Agos.Club
          </Typography>
          <Typography variant="overline" color="secondary" className={cl(ac['italic'], ac['flex-grow'])}>
            (v1.0)
          </Typography>
          <Link to="/maps">
            <Button className={cl(ac['mr-1'])}>Maps</Button>
          </Link>
          <Link to="/weapons">
            <Button className={cl(ac['mr-1'])}>Weapons</Button>
          </Link>
          <Link to="/hats">
            <Button className={cl(ac['mr-1'])}>Hats</Button>
          </Link>
          <Link to="/mobs">
            <Button className={cl(ac['mr-1'])}>Mobs</Button>
          </Link>
          <Link to="/more">
            <Button className={cl(ac['mr-1'])}>More</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
