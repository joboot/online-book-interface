import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import PageOne from '../pages/PageOne';
import DefaultPage from './DefaultPage';

const NavRoutes = () => (
  <Routes>
    <Route exact path="/" element={<DefaultPage Page = {<SignIn/>}/>} />
    <Route exact path="/Home" element={<DefaultPage Page = {<Home/>}/>} />
    <Route exact path="/PageOne" element={<DefaultPage Page = {<PageOne/>}/>} />
  </Routes>
);

export default NavRoutes;