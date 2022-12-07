import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from '../pages/Home';
import PageOne from '../pages/PageOne';

const NavRoutes = () => (
  // <Router>
  <Routes>
    <Route exact path="/home" component={Home} />
    {/* Add more routes here */}
  {/* </Router> */}
  </Routes>
);

export default NavRoutes;