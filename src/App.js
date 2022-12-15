import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
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

