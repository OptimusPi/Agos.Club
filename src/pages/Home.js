import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Box my={4} mx={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hmm eventually I'll put stuff here
        </Typography>
        <Typography variant="subtitle2" color="secondary" gutterBottom>
          Site created by TickTockMan. Special thanks to top contributors: Dronzin, Lucifer.
        </Typography>
        <Typography variant="subtitle1" color="secondary" gutterBottom>
          Note: Please let me know if something is wrong or if you have any suggestions in{' '}
          <a href="https://discord.com/channels/301473545735897108/795724403291193364" rel="noreferrer" target="_blank">
            #fan_based
          </a>
        </Typography>
      </Box>
    </>
  );
}
