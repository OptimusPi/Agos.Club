import React from 'react';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import tournamentWinner from '../assets/misc/tournament_winner.png';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: '100%',
  },
  latestWinner: {
    background:
      'linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);',
  },
}));

export default function TournamentGrid() {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xl={3} lg={3} sm={6} xs={12}>
        <Card className={clsx(classes.card, classes.latestWinner)}>
          <CardContent>
            <Grid container justify="flex-start" alignItems="center" spacing={2}>
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  #10: March 13, 2021
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  <img height="50" alt="tourney_winner" src={tournamentWinner} /> -J-
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="caption">
              Defeated sk8, KrazyKilla, Syco, Sienna420, Fisuman
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xl={3} lg={3} sm={6} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container justify="flex-start" alignItems="center" spacing={2}>
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  #9: February 27, 2021
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  <img height="50" alt="tourney_winner" src={tournamentWinner} /> -J-
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="caption">
              Defeated KrazyKilla, Finn, sk8, Fisuman
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xl={3} lg={3} sm={6} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container justify="flex-start" alignItems="center" spacing={2}>
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  #8: February 13, 2021
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  -J-
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="caption">
              Defeated RCT, KrazyKilla, sk8
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xl={3} lg={3} sm={6} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container justify="space-between" spacing={3}>
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  #7: January 31, 2021
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  RCT
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="caption">
              Defeated sk8, KrazyKilla, Lucifer
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xl={3} lg={3} sm={6} xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container justify="space-between" spacing={3}>
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  #6: January 16, 2021
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  sk8
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="caption">
              Defeated TickTockMan, Aleksandher, RCT, Jethro
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
