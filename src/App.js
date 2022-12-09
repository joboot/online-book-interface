import './index.css';
import Sidebar from './components/SidebarComp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import React from "react";
import PageOne from './pages/PageOne';
import DefaultPage from './components/DefaultPage';
import NavRoutes from './components/NavRoutes';
import Footer from './components/FooterComp';
import Title from './pages/book/title'
import Intro from './pages/book/intro'

function App() {
  return (
    <div className="App"> 
      <Router> 
          {<NavRoutes/>}
          {<DefaultPage Page = {<SignIn/>}/>}
      </Router>
      <Footer /> {/* Footer component */}
    </div>
  );
}

export default App;

