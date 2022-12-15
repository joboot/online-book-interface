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
            <img src={require("../../images/debug.png")} width="300px" alt="Degugging Meme 1"/>
            <br/>
            <br/>
            <p>
                As you code, errors will inevitably show up in your code, 
                so here are some things to watch out for.
            </p>
            <img src={require("../../images/whoWin.png")} width="300px" alt="Degugging Meme 2"/>
            <br/>
            <br/>
            <p>
                There will be various types of brackets (<b>{'\u007b\u007d'}</b>,<b> {'\u005b\u005d'}</b>), as well as parentheses <b>()</b> that you will use
                in any coding language, and it is always important to make sure each open bracket or grouping symbol has an appropriate
                closing bracket or symbol and that the beginning and ending of each grouping is in the exact place it needs to be.
                Some coding environments will highlight the closing symbol that corresponds with a given opening symbol upon hovering
                or clicking it, and vice versa.
            </p>
            <img src={require("../../images/semicolon.png")} width="400px" height="250px" alt="Degugging Meme 3"/>
            <br/>
            <br/>
            <p>
                In most languages, every individual line that is not the start of a larger structure
                must have a semicolon (<b>;</b>) at the end of it to let the computer know that that is the end of the command
                and that it should treat the next line or command seperately. Forgetting semicolons is probably the
                most common error for beginning programmers.
            </p>
            <p>
                <b>NOTE:</b> Python <b>DOES NOT</b> use semicolons, and generally uses less grouping symbols, but has other
                stipulations in its syntax.
            </p>
            <img src={require("../../images/why.png")} width="300px" alt="Degugging Meme 4"/>
            <br/>
            <br/>
            <p>
                It is important to group and indent your code correctly to make readable code that is easier to debug.
                Always indent code within a grouping structure one tab further than code outside of said grouping structure.
                In Python, you <b>must</b> ident your code in this way, otherwise the code will not work, as this is how
                Python can avoid the use of semicolons and more brackets.
            </p>
            <p>
                It is also recommended to leave an empty line between any lines or blocks of code that are unrelated to each other
                and make sure to group related code together when possible.
            </p>
            <img src={require("../../images/itWorks.png")} width="300px" alt="Degugging Meme 5"/>
            <br/>
            <br/>
            <Button variant="dark" onClick={() => {navigate('../chapter1p2')}}>
                Previous page: Chapter 1, Section 2: "Hello World"
            </Button>
            <br/>
            <br/>
            <Button  onClick={() => {navigate('../chapter2p2')}}>
                Continue to Chapter 2, Section 2: Rubber Duck Technique
            </Button>
        </div>
    );
};

export default Ch2Page1;