import React, { useEffect } from "react";
import Register from "./components/register/Register";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Profile from "./components/Profile/Profile";


import {Routes,Route } from "react-router-dom" ;
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";

//import  Dashbord  from "./components/dashbord/Dashbord";
//import PrivateRoute from "./components/router/privateRoute"
//import { useDispatch } from "react-redux";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>




function App() {
  //const dispatch = useDispatch()
  useEffect(() => {
  
  
    return () => {
     
    }
  }, [])
  
  
  return (
    <div className="App">
      <NavBar/>
      
    
      <Routes>
      <Route path ="/home" element= {<Home/>}/>
      <Route path ="/login" element= {<Login/>}/>
      <Route path ="/register" element= {<Register/>}/>
      <Route path ="/user" element= {<User/>}/>
      <Route path ="/admin" element= {<Admin/>}/>
      <Route path ="/profile" element= {<Profile/>}/>
      {/* <privateRoute path ="/dashbord" element= {<Dashbord/>}/> */}
      </Routes>
      <Footer/>
     
    </div>
  );
}
export default App;
 