import React from "react";
import {Routes,Route } from "react-router-dom" ;
import Register from "./components/register/Register";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";




function App() {
  return (
    <div className="App">
      <Routes>
    
      <Route path ="/login" element= {<Login/>}/>

      <Route path ="/register" element= {<Register/>}/>
      <Route path ="/user" element= {<User/>}/>
      <Route path ="/admin" element= {<Admin/>}/>
      </Routes>
    </div>
  );
}
export default App;
  //<Route path ="/login" element= {<Login/>}/>