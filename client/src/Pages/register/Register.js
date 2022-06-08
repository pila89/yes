import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {registerUser} from  "../../Redux/actions/user";
import {Form , Button, Card} from 'react-bootstrap';

const Register =()=>{

  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');
  const [fullName ,setFullName]= useState('');
  const [phone, setPhone] = useState('');
  const [adresse,setAdresse]= useState('');
  const dispatch = useDispatch();

  return (
    <div>
       <Card className='no'> 
        <div>
            <div className='oui'>
             Register
            </div>
       
        </div>
       
        <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FullName </Form.Label>
        <Form.Control type="email" placeholder="Enter your full name "   onChange={(e) => setFullName(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone </Form.Label>
        <Form.Control type="email" placeholder="Enter your phone "   onChange={(e) => setPhone(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse </Form.Label>
        <Form.Control type="email" placeholder="Enter your adresse "   onChange={(e) => setAdresse(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter  your Email"   onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Button  onClick={()=>dispatch(registerUser({fullName,email,pwd,phone,adresse}))}  variant="primary">
            Submit
          </Button>
        </Form>
        </div>
      </Card>
            
    </div>
  )
}
export default Register 
