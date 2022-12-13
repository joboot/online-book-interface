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
            <p>
                Duck
            </p>
            <img src={require("../../images/duckLaptop.png")} width="200px" alt="Duck on Laptop"/>
            <p>
                Duck
            </p>
            <img src={require("../../images/explain.png")} width="200px" alt="Explain it to the Duck"/>
            <p>
                Goose
            </p>
            <img src={require("../../images/duck.png")} width="200px" alt="Title"/>
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