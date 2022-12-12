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
import Ch1Page1 from './pages/book/chapter1p1';
import Ch1Page2 from './pages/book/chapter1p2';
import Ch2Page1 from './pages/book/chapter2p1';
import Ch2Page2 from './pages/book/chapter2p2';

function App() {
  return (
    <div className="App"> 
      <Router> 
          <NavRoutes/>
          <Routes>
            <Route path='/title' exact element={<Title/>} />
            <Route path='/intro' element={<Intro/>} />
            <Route path='/chapter1p1' element={<Ch1Page1/>} />
            <Route path='/chapter1p2' element={<Ch1Page2/>} />
            <Route path='/chapter2p1' element={<Ch2Page1/>} />
            <Route path='/chapter2p2' element={<Ch2Page2/>} />
          </Routes>
          <Footer /> {/* Footer component */}
      </Router>
    </div>
  );
}

export default App;

