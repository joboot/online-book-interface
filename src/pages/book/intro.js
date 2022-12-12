import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    return (
        <div>
            <h2>
                Welcome to Programming 4 Dumb Dumbs!
            </h2>
            <br/>
            <p>
                This book will teach you some basic programming techniques and such.
            </p>
            <img src={require("../../images/duck.png")} width="500px" alt="Rubber Duck"/>
        </div>
    );
};

export default Intro;