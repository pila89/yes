import React, { useState } from 'react';
import {addUser} from "../../services/userservice";



export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name , setName]= useState('');

  const handleRegister = () =>  {
    addUser ({
        "email":email ,
          "pwd":password,
          "fullName":name
        }).then(
            data=>console.log(data.data)
        )
        
          };

  return (
    <div>
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                Nqme ;
                <input
                  label="Your name"
                  icon="user"
                  type="text" onChange={(e) => setName(e.target.value)}
                />
                mail
                <input
                  label="Your email"
                  icon="envelope"
                  type="email"  onChange={(e) => setEmail(e.target.value)}
                />
              password
                <input
                  label="Your password"
                  icon="lock"
                  type="password" onChange={(e) => setPassword(e.target.value)}
                  />

              </div>
              <div className="text-center">
                <button onClick={handleRegister} color="primary">Register</button>
              </div>
            </form>
    </div>
  )
}
