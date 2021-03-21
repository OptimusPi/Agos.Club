import React from 'react';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import tournamentWinner from '../assets/misc/tournament_winner.png';
import { getTournamentData } from '../utils/data';
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
      {getTournamentData().map((item, index) => {
        const cardClassName = index === 0 ? clsx(classes.card, classes.latestWinner) : classes.card;
        return (
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <Card className={cardClassName}>
              <CardContent>
                <Grid container justify="flex-start" alignItems="center" spacing={2}>
                  <Grid item>
                    <Typography color="textSecondary" gutterBottom variant="h6">
                      #{item.number}: {item.date}
                    </Typography>
                    <Typography color="textPrimary" variant="h3">
                      {index === 0 && <img height="50" alt="tourney_winner" src={tournamentWinner} />} {item.winner}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="textSecondary" variant="caption">
                  Defeated {item.defeated}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
