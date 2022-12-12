import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Title = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                Programming for Dumb Dumbs
            </h1>
            <img src={require("../../images/duck.png")} width="1000px" alt="Title Page with Rubber Duck"/>
        </div>
    );
};

export default Title;
