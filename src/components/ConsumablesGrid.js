import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Box, Paper, Grid, Tooltip, Zoom } from '@material-ui/core';
import TextLine from '../components/TextLine';
import { getConsumableImageFromName } from '../utils/images';
import { getConsumablesData } from '../utils/data';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  img: {
    maxWidth: 128,
    maxHeight: 128,
  },
  imgRounded: {
    maxWidth: 96,
    maxHeight: 96,
    borderRadius: 15,
  },
  cardTitle: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
}));

const ConsumablesGridItems = ({ consumeInfo, classes }) => {
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.primary.dark,
      border: '1px solid #dadde9',
      maxWidth: '600px',
    },
  }))(Tooltip);

  return (
    <Grid item>
      <HtmlTooltip
        className={classes.tooltip}
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 400 }}
        interactive
        leaveDelay={50}
        leaveTouchDelay={5000}
        arrow
        enterTouchDelay={0}
        placement="bottom"
        title={
          <Paper className={classes.cardTitle} elevation={2}>
            <Typography variant="h4">{consumeInfo.name}</Typography>
            <Typography variant="subtitle2" gutterBottom>
              {consumeInfo.description}
            </Typography>
            {consumeInfo.details && <TextLine textTag="Details" text={consumeInfo.details} />}
          </Paper>
        }
      >
        <img className={classes.img} alt={name} src={getConsumableImageFromName(consumeInfo.name)} />
      </HtmlTooltip>
    </Grid>
  );
};

export default function Mobs() {
  const classes = useStyles();

  return (
    <Box my={2} mx={2}>
      {getConsumablesData().map((item, index) => {
        return <ConsumablesGridItems consumeInfo={item} classes={classes} key={item.name} />;
      })}
    </Box>
  );
}
