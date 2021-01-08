import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Fonts from '../assets/fonts';

const lightMuiTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      black: '#000000',
      white: '#ffffff',
      grey: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      light: '#f5ffff',
      main: '#c2e3fc',
      dark: '#91b1c9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#626464',
      main: '#383a3a',
      dark: '#121414',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          Fonts.MetropolisRegular,
          Fonts.MetropolisBold,
          Fonts.RobotoRegular,
          Fonts.RobotoMedium,
          Fonts.RobotoBold,
        ],
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
  custom: {},
});

const darkMuiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#000000',
      white: '#ffffff',
      grey: 'rgba(0, 0, 0, 0.87)',
    },
    primary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827',
      contrastText: '#000',
    },
    secondary: {
      light: '#efefef',
      main: '#bdbdbd',
      dark: '#8d8d8d',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          Fonts.MetropolisRegular,
          Fonts.MetropolisBold,
          Fonts.RobotoRegular,
          Fonts.RobotoMedium,
          Fonts.RobotoBold,
        ],
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
  custom: {},
});

export const lightTheme = responsiveFontSizes(lightMuiTheme);
export const darkTheme = responsiveFontSizes(darkMuiTheme);
