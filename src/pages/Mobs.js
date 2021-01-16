import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Grid, Tooltip, Zoom } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getMobImageFromName } from '../utils/images';
import { getMobData } from '../utils/data';
import MobCard from '../components/MobCard';
import forestIconUri from '../assets/mob_page/forest.png';
import grasslandsIconUri from '../assets/mob_page/grasslands.png';
import mountainIconUri from '../assets/mob_page/mountain.png';
import castleIconUri from '../assets/mob_page/castle.png';
import desertIconUri from '../assets/mob_page/desert.png';
import destroyablesIconUri from '../assets/mob_page/destroyables.png';
import eventsIconUri from '../assets/mob_page/events.png';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  img: {
    maxWidth: 128,
    maxHeight: 128,
  },
  imgRounded: {
    maxWidth: 96,
    maxHeight: 96,
    borderRadius: 15,
  },
}));

const MobGridItem = ({ mobDatum, classes }) => {
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.primary.dark,
      border: '1px solid #dadde9',
      maxWidth: '600px',
    },
  }))(Tooltip);

  return (
    <Grid item>
      <HtmlTooltip
        className={classes.tooltip}
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 400 }}
        interactive
        leaveDelay={1000}
        leaveTouchDelay={10000}
        arrow
        enterTouchDelay={0}
        placement="bottom"
        title={<MobCard mobInfo={mobDatum} />}
      >
        <img className={classes.img} alt={name} src={getMobImageFromName(mobDatum.name)} />
      </HtmlTooltip>
    </Grid>
  );
};

export default function Mobs() {
  const classes = useStyles();

  return (
    <Box my={4} mx={4}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt={name} src={grasslandsIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Grasslands
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justify="flex-start" alignItems="center" spacing={4}>
            {getMobData().map((item, index) => {
              if (item.area.includes('Grasslands') || item.area.includes('Everywhere'))
                return <MobGridItem mobDatum={item} classes={classes} key={item.name} />;
              return <div key={index}></div>;
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt={name} src={forestIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Forest
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justify="flex-start" alignItems="center" spacing={4}>
            {getMobData().map((item, index) => {
              if (item.area.includes('Forest') || item.area.includes('Everywhere'))
                return <MobGridItem mobDatum={item} classes={classes} key={item.name} />;
              return null;
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt={name} src={mountainIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Mountain & Caves
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justify="flex-start" alignItems="center" spacing={4}>
            {getMobData().map((item, index) => {
              if (item.area.includes('Mountain') || item.area.includes('Everywhere'))
                return <MobGridItem mobDatum={item} classes={classes} key={item.name} />;
              return null;
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt={name} src={castleIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Castle
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justify="flex-start" alignItems="center" spacing={4}>
            {getMobData().map((item, index) => {
              if (item.area.includes('Castle') || item.area.includes('Everywhere'))
                return <MobGridItem mobDatum={item} classes={classes} key={item.name} />;
              return null;
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt={name} src={desertIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Desert & Beach
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justify="flex-start" alignItems="center" spacing={4}>
            {getMobData().map((item, index) => {
              if (item.area.includes('Desert') || item.area.includes('Beach') || item.area.includes('Everywhere'))
                return <MobGridItem mobDatum={item} classes={classes} key={item.name} />;
              return null;
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt={name} src={destroyablesIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Destroyables
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7a-content" id="panel7a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.imgRounded} alt={name} src={eventsIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Events & More
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Box>
  );
}
