import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default function More() {
  return (
    <>
      <Box my={4} mx={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Try again later. I'm thinking Abilities, Cosmetics, Consumables, Secrets, Players
        </Typography>
      </Box>
    </>
  );
}
