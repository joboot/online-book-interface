import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>
                Welcome to Programming 4 Dumb Dumbs!
            </h2>
            <br/>
            <p>
                This book will teach you some basic programming principles, tricks, techniques etc.
            </p>
            <img src={require("../../images/duck.png")} width="800px" alt="Rubber Duck"/>
            <br/>
            <br/>
            <p>
                Learn how to be less of a dumb dumb when it comes to programming!
            </p>
            <Button  onClick={() => {navigate('../chapter1p1')}}>
                Continue to Chapter 1, Section 1: Programming Languages
            </Button>
        </div>
    );
};

export default Intro;