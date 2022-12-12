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


function App() {
  return (
    <div className="App"> 
      <Router> 
          <NavRoutes/>
          <Routes>
            
          </Routes>
          <Footer /> {/* Footer component */}
      </Router>
    </div>
  );
}

export default App;

