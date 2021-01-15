import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getMobImageFromName } from '../utils/images';
import MobCard from '../components/MobCard';
import forestIconUri from '../assets/mob_page/forest.png';
import grasslandsIconUri from '../assets/mob_page/grasslands.png';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  img: {
    maxWidth: 64,
    maxHeight: 64,
  },
  imgRounded: {
    maxWidth: 64,
    maxHeight: 64,
    borderRadius: 15,
  },
}));

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
          <Grid>
            <img className={classes.img} alt={name} src={getMobImageFromName('Blig')} />
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Box display="flex" alignItems="center">
            <img className={classes.img} alt={name} src={forestIconUri} />
            <Typography variant="subtitle1" className={classes.heading}>
              Forest
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography className={classes.heading}>Mountain</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography className={classes.heading}>Castle</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
          <Typography className={classes.heading}>Desert & Beach</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6a-content" id="panel6a-header">
          <Typography className={classes.heading}>Destroyables</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7a-content" id="panel7a-header">
          <Typography className={classes.heading}>Event & More</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Box>
  );
}
