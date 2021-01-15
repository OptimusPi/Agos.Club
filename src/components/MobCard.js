import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    maxWidth: '100%',
  },
}));

export default function MobCard({ mobInfo }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography variant="h5">
        {mobInfo.name} {mobInfo.nicknames && '(' + mobInfo.nicknames + ')'}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {mobInfo.description}
      </Typography>
      <Box display="flex">
        <Typography variant="body1">Defense:&nbsp;</Typography>
        <Typography variant="body1">{mobInfo.defense}</Typography>
      </Box>
      <Box display="flex">
        <Typography variant="body1">Vitality:&nbsp;</Typography>
        <Typography variant="body1">{mobInfo.vitality}</Typography>
      </Box>
      <Box display="flex">
        <Typography variant="body1">Abilities:&nbsp;</Typography>
        <Typography variant="body1">{mobInfo.abilities}</Typography>
      </Box>
      <Box display="flex">
        <Typography variant="body1">DOTs:&nbsp;</Typography>
        <Typography variant="body1">{mobInfo.dots}</Typography>
      </Box>
    </Paper>
  );
}
