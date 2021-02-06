import React from 'react';
import { Typography } from '@material-ui/core';
export default function TextLine({ textTag, text }) {
  return (
    <>
      <div style={{ display: 'flex', marginBottom: '5px' }}>
        <Typography style={{ fontWeight: 'bold' }}>{textTag}:&nbsp;</Typography>
        <Typography>{text}</Typography>
      </div>
    </>
  );
}
