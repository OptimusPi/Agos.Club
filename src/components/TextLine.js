import React from 'react';
import { Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginBottom: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '8px',
    },
  },
  bold: {
    fontWeight: 'bold',
  },
}));

export default function TextLine({ textTag, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.bold} variant="body2">
        {textTag}
        <Hidden smDown>:&nbsp;</Hidden>
      </Typography>
      <Typography variant="body2">{text}</Typography>
    </div>
  );
}
