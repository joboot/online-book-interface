import './index.css';
import Sidebar from './components/SidebarComp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import React from "react";
import PageOne from './pages/PageOne';
import DefaultPage from './components/DefaultPage';
import NavRoutes from './components/NavRoutes';


function App() {
  return (
    <Router>
      <div className="App">  
        {<NavRoutes/>}
        {/* <Header/> */}
        {<Sidebar/>}
        {<SignIn/>}
        {<PageOne/>}
        {/* <DefaultPage/> */}
        
      </div>
    </Router>
  );
}

export default App;

