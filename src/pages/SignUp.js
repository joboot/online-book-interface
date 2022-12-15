import React, { useState, useRef, useEffect} from 'react'
import { Form, Button, Container, Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import Footer from '../components/FooterComp';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


const SignUp = () => {
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])
  
  const onSubmit = async (path) => {
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(user, pwd);
      setUser('');
      setPwd('');
      setMatchPwd('');
      navigate(path)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus();
    }
		
	};

  return (
    <div>
      <Navbar className='signInTopBar'>
        <h1
        style={{ textAlign: "center",
            marginLeft: "200px",
            color: "#1E90FF" }}
      >
        Programming for Dumb Dumb's	

      </h1>
      </Navbar>
      <Container className='pageContent'>
      

        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>
        <h1 className='signUpForm'>Sign up</h1>
        <Col xs={3} className='signUpForm'>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    Username
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                  </Form.Label>
                  <Form.Control 
                    type="username" 
                    autoComplete='off'
                    placeholder="Enter username"
                    value={user || ''}
                    onChange= {e => setUser(e.target.value)} 
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
              </Form.Group>
              <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Password
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                  </Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={pwd || ''}
                    onChange= {e => setPwd(e.target.value)} 
                    required 
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    />
              </Form.Group>
              <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
              </p>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>
                    Confirm Password
                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                  </Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={matchPwd || ''}
                    onChange= {e => setMatchPwd(e.target.value)} 
                    required 
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)} 
                    />
              </Form.Group>
              <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>

              <Button type="button" className="btn btn-primary" onClick={() => {onSubmit("../intro")}}>
                Sign up
              </Button>
          </Form>
          <br/>
          <p>
            Already have an account?<br />
            <span className="line">
                <a href="/SignIn">Sign In</a>
            </span>
          </p>
        </Col>


      </Container>
      <div className='footer'>
        <Footer />
      </div>
       

    </div>
  )
}

export default SignUp;
