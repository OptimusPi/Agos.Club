import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Paper, Button } from '@material-ui/core';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import MapImage1 from '../assets/map/map1.png';
import MapImage2 from '../assets/map/map2.png';
import MapImage3 from '../assets/map/map3.png';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

function TabPanel(props) {
  const { children, imgSource, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper elevation={2} className={classes.tabPanel}>
          <TransformWrapper defaultScale={1} defaultPositionX={0} defaultPositionY={0}>
            {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
              <>
                <div className={classes.toolbox}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ZoomInIcon />}
                    onClick={zoomIn}
                  >
                    Zoom In
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ZoomOutIcon />}
                    onClick={zoomOut}
                  >
                    Zoom Out
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ZoomOutMapIcon />}
                    onClick={resetTransform}
                  >
                    Reset
                  </Button>
                </div>
                <TransformComponent className={classes.map}>
                  <img className={classes.mapImg} src={imgSource} alt="Agos Map" />
                </TransformComponent>
                <br />
                <div style={{ textAlign: 'left' }}>{children}</div>
              </>
            )}
          </TransformWrapper>
        </Paper>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px',
    margin: '20px',
  },
  tabPanel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px',
  },
  toolbox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 'calc(100vw - 60px)',
    marginBottom: '10px',
  },
  button: {
    margin: '10px',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.dark,
  },
  map: {},
  mapImg: {
    maxHeight: '400px',
    maxWidth: '100%',
    objectFit: 'cover',
  },
}));

export default function Maps() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Grasslands" {...a11yProps(0)} />
          <Tab label="Forest" {...a11yProps(1)} />
          <Tab label="Mountain & Arena" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} classes={classes} imgSource={MapImage1} index={0}>
        <Typography>Normal Spawns: Novice Blig, Blig, Bleep, Flowa</Typography>
        <Typography>Anniversary Event Spawns: Presents</Typography>
        <Typography>Christmas Event Spawns: Presents, Santa, Grinch</Typography>
        <Typography>Halloween Spawns: Pumpkins</Typography>
        <Typography>Other: Weak Chest, Inconspicuous Mushroom</Typography>
      </TabPanel>
      <TabPanel value={value} classes={classes} imgSource={MapImage2} index={1}>
        <Typography>Normal Spawns: Forest Guardian, Spirit, Ninja, Elder Spirit (Rare)</Typography>
        <Typography>Anniversary Event Spawns: Presents</Typography>
        <Typography>Christmas Event Spawns: Presents, Santa, Grinch</Typography>
        <Typography>Halloween Spawns: Pumpkins</Typography>
        <Typography>Other: Weak Chest, Inconspicuous Mushroom, Rare Truffle, Bird Egg</Typography>
      </TabPanel>
      <TabPanel value={value} classes={classes} imgSource={MapImage3} index={2}>
        <Typography>Normal Spawns: Rizard, Fox</Typography>
        <Typography>Anniversary Event Spawns: Presents</Typography>
        <Typography>Christmas Event Spawns: Presents, Santa, Grinch</Typography>
        <Typography>Halloween Spawns: Pumpkins</Typography>
        <Typography>Other: Weak Chest</Typography>
      </TabPanel>
    </div>
  );
}
