import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Ch1Page2 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Section 2: "Hello World"</h2>
            <br/>   
            <h4>Dumb Dumb's First Program</h4>
            <br/>
            <p>
                No matter what language you are using, your first program will probably be "Hello World"
            </p>
            <img src={require("../../images/helloWorld.png")} width="500px" alt="Hello World Meme"/>
        </div>
    );
};

export default Ch1Page2;