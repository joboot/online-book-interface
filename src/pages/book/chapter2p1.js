import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Ch2Page1 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Chapter 2: Tips and Tricks</h1>
            <br/>
            <h2>Section 1: Debugging 101</h2>
            <br/>
            <h4>Semicolons, Brackets, and Other Problems</h4>
            <br/>
            <img src={require("../../images/why.png")} width="200px" alt="Degugging Meme 1"/>
            <br/>
            <p>
                
            </p>
            <img src={require("../../images/whoWin.png")} width="300px" alt="Degugging Meme 2"/>
            <br/>
            <p>
                
            </p>
            <img src={require("../../images/debug.png")} width="200px" alt="Degugging Meme 3"/>
            <p>
                
            </p>
            <img src={require("../../images/itWorks.png")} width="200px" alt="Degugging Meme 4"/>
        </div>
    );
};

export default Ch2Page1;