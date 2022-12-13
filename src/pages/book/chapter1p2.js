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
                No matter what language you are using, your first program should probably be a "Hello World" program.
                This simply is a program that outputs the words "Hello World."
                The way to do this differs from language to language.
            </p>
            <p>
                If you are using C++, it will look like this:
            </p>
            <img src={require("../../images/HelloCpp.png")} alt="Hello World code in C++"/>
            <br/>
            <p>
                If you are using Java, it will look like this:
            </p>
            <img src={require("../../images/HelloJava.png")} alt="Hello World code in Java"/>
            <br/>
            <p>
                And if you are using Python, it will simply be:
            </p>
            <img src={require("../../images/HelloPython.png")} alt="Hello World code in Python"/>
            <br/>
            <p>
                We will explain the specifics of what these lines mean later in the course, but for now,
                run the code, and the words "Hello World!" should show up as a line in the output.
            </p>
            <br/>
            <img src={require("../../images/helloWorld.png")} width="200px" alt="Hello World Meme"/>
            <br/>
            <br/>
            <Button  onClick={() => {navigate('../chapter2p1')}}>
                Continue to Chapter 2, Section 1: Debugging 101
            </Button>
        </div>
    );
};

export default Ch1Page2;