import { Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import MapImage1 from '../assets/map/map1.png';
import MapImage2 from '../assets/map/map2.png';
import MapImage3 from '../assets/map/map3.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px',
    margin: '20px',
  },
  toolbox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 'calc(100vw - 60px)',
    marginBottom: '10px',
  },
  button: {
    marginLeft: '10px',
    width: '2em',
  },
  map: {},
  mapImg: {
    maxHeight: '400px',
    maxWidth: '100%',
    objectFit: 'cover',
  },
}));

export default function Maps() {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={2} className={classes.root}>
        <TransformWrapper defaultScale={1} defaultPositionX={0} defaultPositionY={0}>
          {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
            <>
              <div className={classes.toolbox}>
                <button className={classes.button} onClick={zoomIn}>
                  +
                </button>
                <button className={classes.button} onClick={zoomOut}>
                  -
                </button>
                <button className={classes.button} onClick={resetTransform}>
                  x
                </button>
              </div>
              <TransformComponent className={classes.map}>
                <img className={classes.mapImg} src={MapImage1} alt="Agos Map" />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </Paper>
      <Paper elevation={2} className={classes.root}>
        <TransformWrapper defaultScale={1} defaultPositionX={0} defaultPositionY={0}>
          {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
            <>
              <div className={classes.toolbox}>
                <button className={classes.button} onClick={zoomIn}>
                  +
                </button>
                <button className={classes.button} onClick={zoomOut}>
                  -
                </button>
                <button className={classes.button} onClick={resetTransform}>
                  x
                </button>
              </div>
              <TransformComponent className={classes.map}>
                <img className={classes.mapImg} src={MapImage2} alt="Agos Map" />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </Paper>
      <Paper elevation={2} className={classes.root}>
        <TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={100}>
          {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
            <>
              <div className={classes.toolbox}>
                <button className={classes.button} onClick={zoomIn}>
                  +
                </button>
                <button className={classes.button} onClick={zoomOut}>
                  -
                </button>
                <button className={classes.button} onClick={resetTransform}>
                  x
                </button>
              </div>
              <TransformComponent className={classes.map}>
                <img className={classes.mapImg} src={MapImage3} alt="Agos Map" />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </Paper>
    </>
  );
}
