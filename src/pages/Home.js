import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Home Page
        </Typography>
      </Box>
    </>
  );
}
