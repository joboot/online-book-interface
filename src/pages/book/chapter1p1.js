import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Ch1Page1 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                Chapter 1: Hello World
            </h1>
            <br/>
            <h2>Section 1: Programming Languages</h2>
            <h3>CHOOSE YOUR FIGHTER!!!!</h3>    
            <h4>Choosing a Programming Language</h4>
            <br/>
            <p>
                Most concepts in this book will work with any programming language,
                but in order to demonstrate them, you will likely need to work with a specific programming language.
                The most commonly used languages of the style we are talking about are <b>C++</b>, <b>Java</b>, and <b>Python</b>, 
                and they each have their own advantages and disadvantages. These languages all derive from a much older
                language called <b>C</b>.
            </p>
            <p>
                You will need some way to run code in order to do anything.
            </p>
            <img src={require("../../images/weapon.png")} width="500px" alt="Choose your weapon"/>
        </div>
    );
};

export default Ch1Page1;