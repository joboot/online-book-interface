import './index.css';
import Sidebar from './components/SidebarComp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import Header from "./components/TopBarComp";
import PageOne from './pages/PageOne';
import DefaultPage from './components/DefaultPage';


function App() {
  return (
    <Router>
      <div className="App">  
        {/* <Header/> */}
        {/* <Sidebar/> */}
        {/* <SignIn/> */}
        {/* <PageOne/> */}
        <DefaultPage/>
        
      </div>
    </Router>
  );
}

export default App;

