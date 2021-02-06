import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dekuSrc from '../assets/deku_tree.png';
import dekuTransSrc from '../assets/deku_tree_trans.png';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${dekuSrc})`,
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${dekuTransSrc})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%',
    },
  },
  table: {
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell className={classes.bold}>Areas</TableCell>
              <TableCell>Castle, Desert, Beach; fix mobile issues</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Weapons</TableCell>
              <TableCell>
                Combos / Damage / DOTs; Oil Dagger, Kingdom Slayer, Blazing Edge, Virulent, Igu's Cannon, Ground Pound
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Hats</TableCell>
              <TableCell>HYGFBN3, Sorceress Hat, Wise Sentry Helmet, Mighty Keeper Helmet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Mobs</TableCell>
              <TableCell>Many images and data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>More</TableCell>
              <TableCell>Abilities, Cosmetics, Consumables, Secrets</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Correction?</TableCell>
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
        <Grid item lg={3} sm={3} xl={3} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="space-between" spacing={3}>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom variant="h6">
                    January 31, 2021
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
        <Grid item lg={3} sm={3} xl={3} xs={12}>
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
      </Grid>
    </div>
  );
}
