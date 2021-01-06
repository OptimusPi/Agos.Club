import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Maps from './pages/Maps';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { lightTheme } from './utils/theme';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={['/', '/home', '/index']}>
            <Home />
          </Route>
          <Route exact path={['/maps']}>
            <Maps />
          </Route>
          <Route exact path={['/weapons']}>
            <Home />
          </Route>
          <Route exact path={['/hats']}>
            <Home />
          </Route>
          <Route exact path={['/beasts']}>
            <Home />
          </Route>
          <Route exact path={['/misc']}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
