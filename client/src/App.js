import React, { useEffect } from "react";
import Register from "./components/register/Register";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import {Routes,Route } from "react-router-dom" ;
import 'bootstrap/dist/css/bootstrap.min.css';

//import  Dashbord  from "./components/dashbord/Dashbord";
//import PrivateRoute from "./components/router/privateRoute"
//import { useDispatch } from "react-redux";





function App() {
  //const dispatch = useDispatch()
  useEffect(() => {
  
  
    return () => {
     
    }
  }, [])
  
  
  return (
    <div className="App">
      <Routes>
    
      <Route path ="/login" element= {<Login/>}/>
      <Route path ="/register" element= {<Register/>}/>
      <Route path ="/user" element= {<User/>}/>
      <Route path ="/admin" element= {<Admin/>}/>
      {/* <privateRoute path ="/dashbord" element= {<Dashbord/>}/> */}
      </Routes>
    </div>
  );
}
export default App;
 