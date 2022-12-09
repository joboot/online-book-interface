import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import PageOne from '../pages/PageOne';

const NavRoutes = () => (
  <Routes>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/PageOne" component={PageOne} />
  </Routes>
);

export default NavRoutes;