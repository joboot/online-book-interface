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
import Title from '../pages/book/title'
import Intro from '../pages/book/intro'
import Ch1Page1 from '../pages/book/chapter1p1';
import Ch1Page2 from '../pages/book/chapter1p2';
import Ch2Page1 from '../pages/book/chapter2p1';
import Ch2Page2 from '../pages/book/chapter2p2';
import SupportPage from '../pages/SupportPage';

const NavRoutes = () => (
  <Routes>
    <Route exact path="/" element={<SignIn/>} />
    <Route exact path="/SignIn" element={<SignIn/>} />
    <Route exact path="/Home" element={<DefaultPage Page = {<Home/>}/>} />
    <Route exact path="/PageOne" element={<DefaultPage Page = {<PageOne/>}/>} />
    <Route exact path="/title" element={<DefaultPage Page = {<Title/>}/>} />
    <Route exact path="/intro" element={<DefaultPage Page = {<Intro/>}/>} />
    <Route exact path="/chapter1p1" element={<DefaultPage Page = {<Ch1Page1/>}/>} />
    <Route exact path="/chapter1p2" element={<DefaultPage Page = {<Ch1Page2/>}/>} />
    <Route exact path="/chapter2p1" element={<DefaultPage Page = {<Ch2Page1/>}/>} />
    <Route exact path="/chapter2p2" element={<DefaultPage Page = {<Ch2Page2/>}/>} />
    <Route exact path="/SupportPage" element={<DefaultPage Page = {<SupportPage/>}/>} />
  </Routes>
);

export default NavRoutes;