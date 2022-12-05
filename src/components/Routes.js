import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import LayoutDefault from './views/layouts/LayoutDefault';
import Home from '../pages/Home';
import PageOne from '../pages/PageOne';

const Routes = () => (
  <Router>

    <Switch>
      <LayoutDefault exact path="/dashboard" component={Home} />
      {/* Add more routes here */}
    </Switch>

  </Router>
);

export default Routes;