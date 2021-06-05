import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 'calc(100vh - 200px)',
    padding: '20px',
  },
  sliderRow: {
    maxWidth: '450px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  slider: {
    width: '300px',
  },
}));

export default function CombosTable() {
  const classes = useStyles();
  const MAX_TOTAL_VAL = 102;
  const [unused, setUnused] = React.useState(98);
  const [str, setStr] = React.useState(1);
  const [agi, setAgi] = React.useState(1);
  const [vit, setVit] = React.useState(1);
  const [int, setInt] = React.useState(1);

  const handleChange = (event, newValue, type) => {
    if (type === 'str' && newValue + agi + vit + int <= MAX_TOTAL_VAL) {
      setStr(newValue);
      setUnused(unused - (newValue - str));
    } else if (type === 'agi' && newValue + str + vit + int <= MAX_TOTAL_VAL) {
      setAgi(newValue);
      setUnused(unused - (newValue - agi));
    } else if (type === 'vit' && newValue + str + agi + int <= MAX_TOTAL_VAL) {
      setVit(newValue);
      setUnused(unused - (newValue - vit));
    } else if (type === 'int' && newValue + str + agi + vit <= MAX_TOTAL_VAL) {
      setInt(newValue);
      setUnused(unused - (newValue - int));
    }
  };

  return (
    <div className={classes.root}>
      <Typography>
        <b>Calc is a work-in-progress</b>
      </Typography>
      <br />
      <br />
      <Grid container spacing={2} direction="column">
        <Grid item className={classes.sliderRow}>
          <Typography>Unused</Typography>
          <Slider
            className={classes.slider}
            value={unused}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            disabled={true}
            step={1}
            min={0}
            max={98}
          />
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>Strength</Typography>
          <Slider
            className={classes.slider}
            value={str}
            onChange={(event, newValue) => handleChange(event, newValue, 'str')}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={1}
            min={1}
            max={99}
          />
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>Agility</Typography>
          <Slider
            className={classes.slider}
            value={agi}
            onChange={(event, newValue) => handleChange(event, newValue, 'agi')}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={1}
            min={1}
            max={99}
          />
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>Vitality</Typography>
          <Slider
            className={classes.slider}
            value={vit}
            onChange={(event, newValue) => handleChange(event, newValue, 'vit')}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={1}
            min={1}
            max={99}
          />
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>Intelligence</Typography>
          <Slider
            className={classes.slider}
            value={int}
            onChange={(event, newValue) => handleChange(event, newValue, 'int')}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={1}
            min={1}
            max={99}
          />
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>HP</Typography>
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>Stamina</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
