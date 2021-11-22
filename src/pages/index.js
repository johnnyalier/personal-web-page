import React from 'react';
//react router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// web app pages
import Home from './Home';
import About from './About';
import Education from './Education';
import Portfolio from './Portfolio';
import Work from './Work';
import Error from './Error';
//navigation bar
import Navigationbar from './Navigationbar';
const ReactRouterSetup = () => {
  return (
    <Router>
        <Navigationbar />
        <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route path = '/about'>
                <About />
            </Route>
            <Route path = '/education'>
                <Education />
            </Route>
            <Route path = '/portfolio'>
                <Portfolio />
            </Route>
            <Route path = '/work'>
                <Work />
            </Route>
            <Route path = '/*'>
                <Error />
            </Route>
        </Switch>
    </Router>
  );
}

export default ReactRouterSetup;
