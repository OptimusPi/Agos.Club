import React from 'react';
import { Typography, Paper, Table, TableContainer, TableCell, TableRow, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dekuSrc from '../assets/deku_tree.png';
import dekuTransSrc from '../assets/deku_tree_trans.png';
import TournamentGrid from '../components/TournamentGrid';

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
      backgroundPosition: '0px 50px',
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
        Brought to you by TickTockMan. Special thanks to Lucifer. Special fuck-off to that guy who took down our data spreadsheet.
      </Typography>
      <Typography variant="h5" component="h2" style={{ marginTop: '2rem', marginBottom: '.5rem' }}>
        Known Missing Content
      </Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell className={classes.bold}>Correction?</TableCell>
              <TableCell>
                <Typography variant="body2" color="secondary" gutterBottom>
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
            <TableRow>
              <TableCell className={classes.bold}>Weapons</TableCell>
              <TableCell>Oil Dagger, Kingdom Slayer, Virulent, Ground Pound, Damage & DOTs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Hats</TableCell>
              <TableCell>Sorceress Hat, Wise Sentry Helmet, Mighty Keeper Helmet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>Mobs</TableCell>
              <TableCell>Most Data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.bold}>More</TableCell>
              <TableCell>Abilities, Cosmetics, Consumables, Secrets</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" component="h2" style={{ marginTop: '2rem', marginBottom: '.5rem' }}>
        Tournament Winners!
      </Typography>
      <TournamentGrid />
    </div>
  );
}
