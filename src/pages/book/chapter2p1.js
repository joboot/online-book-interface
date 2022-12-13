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
            <img src={require("../../images/debug.png")} width="200px" alt="Degugging Meme 1"/>
            <br/>
            <p>
                As you code, errors will inevitably show up in your code, 
                so here are some things to watch out for.
            </p>
            <img src={require("../../images/whoWin.png")} width="200px" alt="Degugging Meme 2"/>
            <p>
                There will be various types of brackets (<b>{'\u007b\u007d'}</b>,<b> {'\u005b\u005d'}</b>), as well as parentheses <b>()</b> that you will use
                in any coding language, and it is always important to make sure each open bracket 
            </p>
            <img src={require("../../images/semicolon.png")} width="200px" alt="Degugging Meme 3"/>
            <br/>
            <p>
                
            </p>
            <img src={require("../../images/why.png")} width="200px" alt="Degugging Meme 4"/>
            <p>
                
            </p>
            <img src={require("../../images/itWorks.png")} width="200px" alt="Degugging Meme 5"/>
        </div>
    );
};

export default Ch2Page1;