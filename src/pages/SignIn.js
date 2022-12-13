import React, { useState, useRef, useEffect} from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState();
  const [pwd, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])
  
  const onSubmit = (path) => {

    try {
      console.log("Sign in button");
      console.log(user, pwd);
      setUser('');
      setPassword('');
      setSuccess(true);
      navigate(path)
    } catch (err) {

    }
		
	};

  return (
    <div>
      <Container>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"> {errMsg} </p>
        <h1>Sign in</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="username" 
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
                  placeholder="Password"
                  value={pwd || ''}
                  onChange= {e => setPassword(e.target.value)} 
                  required 
                  />
            </Form.Group>
            {/* onClick={() => {onSubmit()}} */}
            {/* href="/Home" */}
            <Button type="button" className="btn btn-primary" onClick={() => {onSubmit("../Home")}}>
              Submit
            </Button>
        </Form>
      </Container>

    </div>
  )
}

export default SignIn;
