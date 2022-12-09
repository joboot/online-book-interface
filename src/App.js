import './index.css';
import Sidebar from './components/SidebarComp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import PageOne from './pages/PageOne';
import Home from './pages/Home';
import DefaultPage from './components/DefaultPage';
import NavRoutes from './components/NavRoutes';
import Footer from './components/FooterComp';
import Title from './pages/book/title'
import Intro from './pages/book/intro'

function App() {
  return (
    <div className="App"> 
      <Router> 
          <NavRoutes/>
          <Footer /> {/* Footer component */}
      </Router>
    </div>
  );
}

export default App;

