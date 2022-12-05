import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";




const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
		console.log("Sign in button");
		navigate("../home")
	};

  return (
    <div>
      <Container>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email || ''}
                    onChange= {e => setEmail(e.target.value)} 
                    required
                  />
                  <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password || ''}
                    onChange= {e => setPassword(e.target.value)} 
                    required 
                    />
              </Form.Group>
              <Button type="button" className="btn btn-primary" onClick={() => {onSubmit()}}>
			          Submit
		          </Button>
          </Form>
      </Container>
    </div>
  )
}

export default SignIn;
