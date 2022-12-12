import './index.css';
import Sidebar from './components/SidebarComp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import NavRoutes from './components/NavRoutes';



function App() {
  return (
    <div className="App"> 
      <Router> 
          <NavRoutes/>
      </Router>
    </div>
  );
}

export default App;

