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
            <h4>A Fun yet Effective Way to Find Coding Mistakes</h4>
            <br/>
            <img src={require("../../images/duckLaptop.png")} width="300px" alt="Duck on Laptop"/>
            <br/>
            <br/>
            <p>
                Sometimes it can be difficult to find exactly where the problem is in your code when
                it isn't working. One strategy to find elusive errors is known as <b>Rubber Duck Programming</b>.
                If your code isn't working, just try explaining each line of your code to a rubber duck!
            </p>
            <img src={require("../../images/explain.png")} width="300px" alt="Explain it to the Duck"/>
            <br/>
            <br/>
            <p>
                You might be thinking, how can a rubber duck fix my code? Well, the trick is, if you explain
                each line of code to the rubber duck, you will find the error as you explain the code.
            </p>
            <img src={require("../../images/duck.png")} width="300px" alt="Title"/>
            <br/>
            <br/>
            <Button variant="dark" onClick={() => {navigate('../chapter2p1')}}>
                Previous page: Chapter 2, Section 1: Debugging 101
            </Button>
            <br/>
        </div>
    );
};

export default Ch2Page2;