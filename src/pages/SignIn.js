import React, { useState, useRef, useEffect, useContext} from 'react'
import { Form, Button, Container, Col } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../components/FooterComp';
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';

const LOGIN_URL = '/auth';

const SignIn = () => {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [pwd, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])
  
  const onSubmit = async (path) => {

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({user, pwd}),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response))

      setUser('');
      setPassword('');
      navigate(path)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
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
        <h1 className='signUpForm'>Sign in</h1>
        <Col xs={3} className='signUpForm'>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    type="username" 
                    autoComplete='off'
                    placeholder="Enter username"
                    value={user || ''}
                    onChange= {e => setUser(e.target.value)} 
                    required
                  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    autoComplete='off'
                    placeholder="Password"
                    value={pwd || ''}
                    onChange= {e => setPassword(e.target.value)} 
                    required 
                    />
              </Form.Group>
              
              {/* onClick={() => {onSubmit()}} */}
              {/* href="/Home" */}
              <Button type="button" className="btn btn-primary" onClick={() => {onSubmit("../intro")}}>
                Sign in
              </Button>
          </Form>
          <br/>
          <p>
            Need an account?<br />
            <span className="line">
                <a href="/SignUp">Sign Up</a>
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

export default SignIn;
