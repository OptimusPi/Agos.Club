import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Box my={4} mx={4}>
        <Typography variant="h4" color="secondary">
          The{' '}
          <a href="https://agos.world" rel="noreferrer" target="_blank">
            Agos
          </a>{' '}
          Fansite
        </Typography>
        <Typography variant="subtitle2" color="secondary" gutterBottom>
          Brought to you by TickTockMan.
        </Typography>
        <Typography variant="p" color="secondary" gutterBottom>
          Special thanks to Dronzin and Lucifer.{' '}
        </Typography>
        <Typography variant="p" color="secondary" gutterBottom>
          Corrections? See{' '}
          <a href="https://discord.com/channels/301473545735897108/795724403291193364" rel="noreferrer" target="_blank">
            #fan_based
          </a>
        </Typography>
      </Box>
    </>
  );
}
