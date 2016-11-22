import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); 

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import Home from './Home';
import About from './About';
import Work from './Work';

import './index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="about" component={About}/>
                <Route path="work" component={Work}/>
            </Route>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);