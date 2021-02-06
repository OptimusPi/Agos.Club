import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Areas from './pages/Areas';
import Hats from './pages/Hats';
import Mobs from './pages/Mobs';
import More from './pages/More';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { lightTheme } from './utils/theme';
import Weapons from './pages/Weapons';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={['/']}>
            <Home />
          </Route>
          <Route exact path={['/areas']}>
            <Areas />
          </Route>
          <Route exact path={['/weapons']}>
            <Weapons />
          </Route>
          <Route exact path={['/hats']}>
            <Hats />
          </Route>
          <Route exact path={['/mobs']}>
            <Mobs />
          </Route>
          <Route exact path={['/more']}>
            <More />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
