import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Ch2Page2 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Section 2: The Rubber Duck Technique</h2>
            <br/>   
            <h4>A fun way to fix coding mistakes.</h4>
            <br/>
            <img src={require("../../images/duckLaptop.png")} width="200px" alt="Degugging Meme 1"/>
            <p>
                
            </p>
            <img src={require("../../images/explain.png")} width="200px" alt="Degugging Meme 1"/>
            <p>
                
            </p>
            <img src={require("../../images/duck.png")} width="200px" alt="Degugging Meme 1"/>
        </div>
    );
};

export default Ch2Page2;