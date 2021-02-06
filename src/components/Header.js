import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Hidden,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AnimatedClouds from '../components/AnimatedClouds';
import mapsIconUri from '../assets/icons/maps.png';
import weaponsIconUri from '../assets/icons/weapons.png';
import hatsIconUri from '../assets/icons/hats.png';
import mobsIconUri from '../assets/icons/mobs.png';
import moreIconUri from '../assets/icons/more.png';
import logoUri from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  headerMenuButton: {
    marginRight: theme.spacing(2),
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

const MainMenu = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.headerMenuButton}
        color="secondary"
        aria-label="main-menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/areas">
          <ListItemIcon>
            <img alt="maps" src={mapsIconUri} width={30} height={30} />
          </ListItemIcon>
          <ListItemText primary="Areas" />
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/weapons">
          <ListItemIcon>
            <img alt="weapons" src={weaponsIconUri} width={30} height={30} />
          </ListItemIcon>
          <ListItemText primary="Weapons" />
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/hats">
          <ListItemIcon>
            <img alt="hats" src={hatsIconUri} width={30} height={30} />
          </ListItemIcon>
          <ListItemText primary="Hats" />
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/mobs">
          <ListItemIcon>
            <img alt="mobs" src={mobsIconUri} width={30} height={30} />
          </ListItemIcon>
          <ListItemText primary="Mobs" />
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/more">
          <ListItemIcon>
            <img alt="more" src={moreIconUri} width={30} height={30} />
          </ListItemIcon>
          <ListItemText primary="More" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Hidden smDown>
          <AnimatedClouds large={true} />
        </Hidden>
        <Hidden mdUp>
          <AnimatedClouds large={false} />
        </Hidden>
        <Toolbar>
          <div className={classes.flexGrow}>
            <Icon edge="start" aria-label="home" component={Link} to="/">
              <img src={logoUri} height="50" alt="Home" component={Link} to="/" />
            </Icon>
          </div>
          <Hidden mdUp>
            <MainMenu classes={classes} />
          </Hidden>
          <Hidden smDown>
            <Button
              className={classes.marginRight}
              startIcon={<img alt={name} width={50} height={50} src={mapsIconUri} />}
              component={Link}
              to="/areas"
            >
              Areas
            </Button>
            <Button
              className={classes.marginRight}
              startIcon={<img alt={name} style={{ width: 50, height: 50 }} src={weaponsIconUri} />}
              component={Link}
              to="/weapons"
            >
              Weapons
            </Button>
            <Button
              className={classes.marginRight}
              startIcon={<img alt={name} style={{ width: 50, height: 50 }} src={hatsIconUri} />}
              component={Link}
              to="/hats"
            >
              Hats
            </Button>
            <Button
              className={classes.marginRight}
              startIcon={<img alt={name} style={{ width: 50, height: 50 }} src={mobsIconUri} />}
              component={Link}
              to="/mobs"
            >
              Mobs
            </Button>
            <Button
              className={classes.marginRight}
              startIcon={<img alt={name} style={{ width: 50, height: 50 }} src={moreIconUri} />}
              component={Link}
              to="/more"
            >
              More
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
}
