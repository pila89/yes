import React, { useState } from 'react';
import {Form , Button} from 'react-bootstrap';
import {login} from '../../services/authservice';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    
    const handleLogin = () =>  {
login ({
    "email":email ,
      "pwd":password
    }).then(
        data=>console.log(data.data)
    )
    
      };
      

  return (
    <div>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"   onChange={(e) => setEmail(e.target.value)}
/>
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>password</Form.Label>

    <Form.Control type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}
/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  onClick={handleLogin}  variant="primary" >
    Submit
  </Button>
</Form>
    </div>
  )
}
