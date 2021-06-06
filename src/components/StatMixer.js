import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Slider, Select, InputLabel, MenuItem, FormControl, Divider } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {},
  mainGrid: {
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  sliderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  slider: {
    maxWidth: '300px',
    marginRight: '10px',
    marginLeft: '10px',
  },
  formControl: {
    width: '100%',
    marginTop: '-10px',
    marginBottom: '20px',
  },
  rectangle: {
    height: '25px',
    width: '200px',
    border: '1px solid black',
    borderRadius: '5px',
    paddingRight: '5px',
  },
  colorRed: {
    backgroundColor: '#FF0000',
  },
  colorGreen: {
    backgroundColor: '#00FF00',
  },
  colorGray: {
    backgroundColor: '#CCCCCC',
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
  const [lvl, setLvl] = React.useState(1);

  const [hat, setHat] = React.useState('');

  const handleChangeHat = (event) => {
    setHat(event.target.value);
  };

  const handleChange = (event, newValue, type) => {
    if (type === 'lvl') {
      setLvl(newValue);
      return;
    }
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
    setStam(200 + 4 * (int - 1) + lvl - 1);
    setHp(200 + 4 * (vit - 1) + lvl - 1);
  }, [str, vit, agi, int]);

  React.useEffect(() => {
    setDef(lvl < 100 ? Math.floor(lvl / 10) + 1 : 10);
  }, [lvl]);

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item className={classes.mainGrid}>
        <Typography variant="h6" align="left" gutterBottom>
          Inputs
        </Typography>
        <Grid container spacing={2} direction="column">
          <Grid item className={classes.sliderRow}>
            <Typography>Level</Typography>
            <Slider
              className={classes.slider}
              value={lvl}
              onChange={(event, newValue) => handleChange(event, newValue, 'lvl')}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              step={1}
              min={1}
              max={100}
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
          <Grid item style={{ width: '100%' }}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Hat</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={hat} onChange={handleChangeHat}>
                <MenuItem value={10}>Hat 1</MenuItem>
                <MenuItem value={20}>Hat 2</MenuItem>
                <MenuItem value={30}>Hat 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Divider />
          <Typography variant="h6" align="left" gutterBottom>
            Outputs
          </Typography>
          <Grid item style={{ width: '100%' }}>
            <div className={clsx(classes.rectangle, classes.colorGray)}>
              <Typography align="right">Def:&nbsp;{def}</Typography>
            </div>
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <div className={clsx(classes.rectangle, classes.colorGreen)}>
              <Typography align="right">HP:&nbsp;{hp}</Typography>
            </div>
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <div className={clsx(classes.rectangle, classes.colorRed)}>
              <Typography align="right">Stam:&nbsp;{stam}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
