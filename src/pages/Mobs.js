import React from 'react';
import { Typography, Box } from '@material-ui/core';

import royalGuardUri from '../assets/mob/royal_guard.png';
import desertSweeperUri from '../assets/mob/desert_sweeper.png';
import desertRangerUri from '../assets/mob/desert_ranger.png';
import soldierUri from '../assets/mob/soldier.png';

export default function Mobs() {
  return (
    <>
      <Box my={4} mx={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Yeah... I need images.
        </Typography>
        <img src={royalGuardUri} height="75" alt="Royal Guard" />
        <img src={desertRangerUri} height="75" alt="Desert Ranger" />
        <img src={desertSweeperUri} height="75" alt="Desert Sweeper" />
        <img src={soldierUri} height="75" alt="Solder" />
      </Box>
    </>
  );
}
