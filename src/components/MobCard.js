import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextLine from '../components/TextLine';

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
      <Typography variant="h4">
        {mobInfo.name} {mobInfo.nicknames && '(' + mobInfo.nicknames + ')'}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {mobInfo.description}
      </Typography>
      {mobInfo.defense && <TextLine textTag="Defense" text={mobInfo.defense} />}
      {mobInfo.vitality && <TextLine textTag="Health" text={mobInfo.vitality} />}
      {mobInfo.abilities && <TextLine textTag="Abilities" text={mobInfo.abilities} />}
      {mobInfo.dots && <TextLine textTag="DOTs" text={mobInfo.dots} />}
    </Paper>
  );
}
