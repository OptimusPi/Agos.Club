import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
    backgroundColor: theme.palette.primary.light,
  },
  paper: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: 128,
    height: 128,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 64,
    maxHeight: 64,
  },
}));

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default function WeaponsCard({ name, description, holders, nicknames, traits, value, image }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={name} src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {nicknames ? (
                  <Typography variant="subtitle1">
                    {name} ({nicknames})
                  </Typography>
                ) : (
                  <Typography variant="subtitle1">{name}</Typography>
                )}
                {traits && (
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Traits: {traits}
                  </Typography>
                )}
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
                {value && (
                  <Typography variant="caption" color="textSecondary">
                    Value: {'$' + formatNumber(value) + ' gold'}
                  </Typography>
                )}
                {holders && (
                  <>
                    <br />
                    <Typography variant="caption" color="textSecondary">
                      Known Holders: {holders}
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
