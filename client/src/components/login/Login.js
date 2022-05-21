import React, { useState } from 'react';
import {Form , Button, Card,} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {loginUser} from '../../Redux/actions/user';
import   "./Login.css";



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
  return (
    <div>
      <Card className='no'> 
        <div>
            <div className='oui'>
             1111
            </div>
       
        </div>
        <div>
        2
        </div>
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email"   onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Button  onClick={()=>dispatch(loginUser({email,password}))}  variant="primary">
            Submit
          </Button>
        </Form>
        </div>
      </Card>
    
    </div>
  )
}
export default Login
