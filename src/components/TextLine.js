import React from 'react';
import { Typography } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

export default function TextLine({ textTag, text }) {
  return (
    <>
      <Hidden smDown>
        <div style={{ display: 'flex', marginBottom: '5px' }}>
          <Typography style={{ fontWeight: 'bold' }}>{textTag}:&nbsp;</Typography>
          <Typography variant="body2">{text}</Typography>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div style={{ marginBottom: '8px' }}>
          <Typography style={{ fontWeight: 'bold' }}>{textTag}&nbsp;</Typography>
          <Typography variant="body2">{text}</Typography>
        </div>
      </Hidden>
    </>
  );
}
