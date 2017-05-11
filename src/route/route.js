import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute,hashHistory, browserHistory } from "react-router";

import configureStore from '../store/configureStore';
import App from '../components/app';

import {LoginComponent} from '../components/Login/Login.component';
import TraderDesktopComponent from '../components/TraderDesktop/TraderDesktop.component'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export const store = configureStore();

var route= <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Provider store={store}>
          <Router history={hashHistory}>
             <Route path="/" component={App}>
                <IndexRoute component={LoginComponent}/>
                <Route path="/trader" component={TraderDesktopComponent}></Route>
            </Route>
        </Router>
</Provider> 
   </MuiThemeProvider>;
   export default route;