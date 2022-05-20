import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import {addUser} from "../../services/userservice";
//import {registerUser} from  "../../Redux/actions/user"

const Register =()=>{

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [fullName ,setFullName]= useState('');
  //const dispatch : useDispatch();

  const handleRegister = () =>  {
    addUser ({
        "email":email,
          "pwd":pwd,
          "fullName":fullName
        }).then(
            data=>console.log(data.data)
        )
        
          };

  return (
    <div>
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                Name 
                <input
                  label="Your name"
                  icon="user"
                  type="text" onChange={(e) => setFullName(e.target.value)}
                />
                Email
                <input
                  label="Your email"
                  icon="envelope"
                  type="email"  onChange={(e) => setEmail(e.target.value)} />
              Password
                <input
                  label="Your password"
                  icon="lock"
                  type="password" onChange={(e) => setPwd(e.target.value)}
                  />

              </div>
              <div className="text-center">
                <button onClick={handleRegister} color="primary">Register</button>
              </div>
            </form>
    </div>
  )
}
export default Register 