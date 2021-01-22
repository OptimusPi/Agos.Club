import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  grid: {
    paddingTop: theme.spacing(),
    paddingBottom: theme.spacing(3),
  },
  card: {
    height: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  differenceValue: {
    marginRight: theme.spacing(1),
  },
  bold: {
    fontWeight: 'bold',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" color="secondary">
        The{' '}
        <a href="https://agos.world" rel="noreferrer" target="_blank">
          Agos
        </a>{' '}
        Fansite
      </Typography>
      <Typography variant="subtitle2" color="secondary" gutterBottom>
        Brought to you by TickTockMan. Special thanks to Dronzin and Lucifer.
      </Typography>
      <Typography variant="h5" component="h2" style={{ marginTop: '2rem', marginBottom: '.5rem' }}>
        Known Missing Content
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell className={classes.bold}>Maps</TableCell>
              <TableCell>Castle, Desert, Beach; fix mobile issues</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Weapons</TableCell>
              <TableCell>
                Combos / Damage / DOTs; Oil Dagger (stats), Agos Illusion (image and stats), Kingdom Slayer (stats),
                Blazing Edge (stats), Virulent, Punch, Kick, Igu's Cannon, Ground Pound
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Hats</TableCell>
              <TableCell>
                Sorceress Hat (stats), HYGFBN3 (image), Wise Sentry Helmet (stats and image), Mighty Keeper Helmet
                (stats and image), Dragon Helm, GM Helm igu, GM Helm Arkyn
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Mobs</TableCell>
              <TableCell>Many images and all data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>More</TableCell>
              <TableCell>Abilities, Cosmetics, Consumables, Secrets</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Corrections or Suggestions?</TableCell>
              <TableCell>
                <Typography variant="p" color="secondary" gutterBottom>
                  Let me know on the game discord channel{' '}
                  <a
                    href="https://discord.com/channels/301473545735897108/795724403291193364"
                    rel="noreferrer"
                    target="_blank"
                  >
                    #fan_based
                  </a>
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" component="h2" style={{ marginTop: '2rem', marginBottom: '.5rem' }}>
        Tournament Winners!
      </Typography>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="space-between" spacing={3}>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom variant="h6">
                    January 16, 2021
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
        <Grid item lg={3} sm={6} xl={3} xs={12}></Grid>
      </Grid>
    </div>
  );
}
