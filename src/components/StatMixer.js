import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  const [hp, setHp] = React.useState(196);
  const [stam, setStam] = React.useState(195);
  const [def, setDef] = React.useState(0);

  const [hat, setHat] = React.useState('');

  const handleChangeHat = (event) => {
    setHat(event.target.value);
  };

  const handleChange = (event, newValue, type) => {
    if (type === 'str' && newValue + agi + vit + int <= MAX_TOTAL_VAL) {
      setStr(newValue);
    } else if (type === 'agi' && newValue + str + vit + int <= MAX_TOTAL_VAL) {
      setAgi(newValue);
    } else if (type === 'vit' && newValue + str + agi + int <= MAX_TOTAL_VAL) {
      setVit(newValue);
    } else if (type === 'int' && newValue + str + agi + vit <= MAX_TOTAL_VAL) {
      setInt(newValue);
    }
  };

  React.useEffect(() => {
    setUnused(MAX_TOTAL_VAL - (str + vit + agi + int));
    setStam(195 + int * 5);
    setHp(196 + 4 * vit);
    setDef(Math.floor(vit / 6));
  }, [str, vit, agi, int]);

  return (
    <div className={classes.root}>
      <Typography>
        <b>Work-in-progress</b>
      </Typography>
      <br />
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Hat</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={hat} onChange={handleChangeHat}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
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
          <Typography>Defense&nbsp;{def}</Typography>
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>HP&nbsp;{hp}</Typography>
        </Grid>
        <Grid item className={classes.sliderRow}>
          <Typography>Stamina&nbsp;{stam}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
