import './index.css';
import Sidebar from './components/SidebarComp';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import React from "react";
import PageOne from './pages/PageOne';
import DefaultPage from './components/DefaultPage';
import NavRoutes from './components/NavRoutes';
// import Footer from './components/FooterComp';


function App() {
  return (
    <div className="App"> 
      <Router> 
          {<NavRoutes/>}
          {/* <Header/> */}
          {<Sidebar/>}
          {/* {<SignIn/>} */}
          {/* {<PageOne/>} */}
          {<DefaultPage Page = {<SignIn/>}/>}
      </Router>

      <Footer /> {/* Footer component */}
    </div>
  );
}

export default App;

