import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
  },
  imageFrame: {
    width: 128,
    height: 128,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
    textAlign: 'center',
  },
  imageHelper: {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle',
  },
  img: {
    maxWidth: 64,
    maxHeight: 64,
    verticalAlign: 'middle',
  },
}));

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default function TableCard({ name, description, holders, nicknames, traits, value, image }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div className={classes.imageFrame}>
            <span className={classes.imageHelper}></span>
            <img className={classes.img} alt={name} src={image} />
          </div>
        </Grid>
        <Grid item xs={12} sm>
          <Typography variant="subtitle1">
            {name}
            {nicknames && ' (' + nicknames + ')'}
          </Typography>
          <Typography variant="caption">{description}</Typography>
          {traits && (
            <Typography variant="body2" color="textSecondary">
              Traits: {traits}
            </Typography>
          )}
          {value && (
            <Typography variant="body2" color="textSecondary">
              Value: {'$' + formatNumber(value) + ' gold'}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
