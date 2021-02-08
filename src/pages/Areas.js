import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Accordion, AccordionSummary, AccordionDetails, Button, Typography, Hidden } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import TextLine from '../components/TextLine';
import grasslandsMap from '../assets/map/map1.png';
import forestMap from '../assets/map/map2.png';
import mountainMap from '../assets/map/map3.png';
import forestIconUri from '../assets/mob_page/forest.png';
import grasslandsIconUri from '../assets/mob_page/grasslands.png';
import mountainIconUri from '../assets/mob_page/mountain.png';
import castleIconUri from '../assets/mob_page/castle.png';
import desertIconUri from '../assets/mob_page/desert.png';

const useStyles = makeStyles((theme) => ({
  mapPanel: {
    display: 'flex',
    flexDirection: 'column',
  },
  map: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
  },
  mapImg: {
    maxHeight: '80vh',
    maxWidth: '100%',
    objectFit: 'cover',
  },
  toolbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: '10px',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.dark,
  },
  imgRounded: {
    maxWidth: 96,
    maxHeight: 96,
    borderRadius: 15,
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  mapNote: {
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    marginLeft: theme.spacing(2),
    marginBottom: '10px',
    color: '#c71404',
  },
}));

function MapPanel({ children, areaName, imgIconSource, imgMapSource, classes }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Box display="flex" alignItems="center">
          <img className={classes.imgRounded} alt={areaName} src={imgIconSource} />
          <Typography variant="subtitle1" className={classes.heading}>
            {areaName}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails className={classes.mapPanel}>
        <Hidden mdUp>
          <Typography variant="subtitle1" className={classes.mapNote}>
            Note: The map isn't available on mobile
          </Typography>
        </Hidden>
        <Hidden smDown>
          <TransformWrapper defaultScale={1} defaultPositionX={0} defaultPositionY={0}>
            {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
              <div className={classes.map}>
                <TransformComponent>
                  <img className={classes.mapImg} src={imgMapSource} alt={areaName + ' Map'} />
                </TransformComponent>
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
              </div>
            )}
          </TransformWrapper>
        </Hidden>
        <div>{children}</div>
      </AccordionDetails>
    </Accordion>
  );
}

export default function Maps() {
  const classes = useStyles();

  return (
    <Box my={2} mx={2}>
      <MapPanel classes={classes} imgMapSource={grasslandsMap} imgIconSource={grasslandsIconUri} areaName="Grasslands">
        <TextLine textTag={'Normal Spawns'} text={'Novice Blig, Blig, Bleep, Flowa, Rogue GM'} />
        <TextLine textTag={'Anniversary'} text={'Present'} />
        <TextLine textTag={'Christmas'} text={'Regular Presents, Premium Presents, Chubby Snowman, Santa, Grinch'} />
        <TextLine textTag={'Halloween'} text={'Pumpkin, Skiddish Pumpkin, Giant Pumpkin'} />
        <TextLine
          textTag={'Other'}
          text={'Rare Truffle, Inconspicuous Mushroom, Weak Chest, Wood Chest, Steel Chest, Gold Chest, Giant Chest'}
        />
      </MapPanel>
      <MapPanel classes={classes} imgMapSource={forestMap} imgIconSource={forestIconUri} areaName="Forest">
        <TextLine
          textTag={'Normal Spawns'}
          text={'Forest Guardian, Spirit, Ninja, Elder Spirit, Spirit Minion, Regular/Rare Forest Bird, Rogue GM'}
        />
        <TextLine textTag={'Anniversary'} text={'Present'} />
        <TextLine textTag={'Christmas'} text={'Presents, Santa, Grinch'} />
        <TextLine textTag={'Halloween'} text={'Forest Guardian Ghost, Pumpkin, Skiddish Pumpkin, Giant Pumpkin'} />
        <TextLine
          textTag={'Other'}
          text={
            // eslint-disable-next-line max-len
            'Regular/Rare/Spoiled Bird Egg, Rare Truffle, Inconspicuous Mushroom, Weak Chest, Wood Chest, Steel Chest, Gold Chest, Giant Chest'
          }
        />
      </MapPanel>
      <MapPanel
        classes={classes}
        imgMapSource={mountainMap}
        imgIconSource={mountainIconUri}
        areaName="Mountain & Caves & Arena"
      >
        <TextLine textTag={'Normal Spawns'} text={'Rizard, Arctic Fox, Rogue GM'} />
        <TextLine textTag={'Anniversary'} text={'Present'} />
        <TextLine textTag={'Christmas'} text={'Regular Presents, Premium Presents, Chubby Snowman, Santa, Grinch'} />
        <TextLine textTag={'Halloween'} text={'Regular Presents, Premium Presents, Chubby Snowman, Santa, Grinch'} />
        <TextLine textTag={'Other'} text={'Weak Chest, Wood Chest, Steel Chest, Gold Chest, Giant Chest'} />
      </MapPanel>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt="Castle" src={castleIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Castle & Dungeon
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails className={classes.mapPanel}>
          <Typography variant="subtitle1" className={classes.mapNote}>
            Note: Map not yet available
          </Typography>
          <TextLine
            textTag={'Normal Spawns'}
            text={
              // eslint-disable-next-line max-len
              'Soldier, Volunteer/Trainee/Standard/Elite/Distinguished/Royal Castle Guard, Wise Sentry, Mighty Gatekeeper, Sorceress'
            }
          />
          <TextLine textTag={'Anniversary'} text={'Present'} />
          <TextLine textTag={'Christmas'} text={'Unknown'} />
          <TextLine textTag={'Halloween'} text={'Unknown'} />
          <TextLine textTag={'Other'} text={'Weak Chest, Wood Chest, Steel Chest, Gold Chest, Giant Chest'} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt="Desert & Beach" src={desertIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Desert & Beach
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails className={classes.mapPanel}>
          <Typography variant="subtitle1" className={classes.mapNote}>
            Note: Map not yet available
          </Typography>
          <TextLine
            textTag={'Normal Spawns'}
            text={'Desert Dweller, Desert Rancher, Desert Enforcer, Colossal Urchin'}
          />
          <TextLine textTag={'Anniversary'} text={'Present'} />
          <TextLine textTag={'Christmas'} text={'Unknown'} />
          <TextLine textTag={'Halloween'} text={'Unknown'} />
          <TextLine
            textTag={'Other'}
            text={
              // eslint-disable-next-line max-len
              'Castle Made of Sand, igufeds Totally Awesome Looking Ship, Weak Chest, Wood Chest, Steel Chest, Gold Chest, Giant Chest'
            }
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
