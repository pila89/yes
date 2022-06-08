import React, { useEffect } from "react";
import {Routes,Route } from "react-router-dom" ;
import Register from "./Pages/register/Register";
import Admin from "./Pages/admin/Admin";
import Login from "./Pages/login/Login";
import Footer from "./components/Footer/Footer";
import Profile from "./Pages/profile/Profile";
import NavBar from "./components/Navbar/Navbar";
import User from "./Pages/user-home/user-home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCar from "./Pages/add-car/Addcar";
import EditCar from "./Pages/edit-car/Editcar";
import Contact from "./Pages/contact/Contact";

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
      <Route path ="/user" element= {<User/>}/>
      <Route path ="/login" element= {<Login/>}/>
      <Route path ="/register" element= {<Register/>}/>
      <Route path ="/admin" element= {<Admin/>}/>
      <Route path ="/profile" element= {<Profile/>}/>
      <Route path ="/contact" element= {<Contact/>}/>
      <Route path ="/addCar" element= {<AddCar/>}/>
      <Route path ="/editCar/:carid" element= {<EditCar/>}/>

      {/* <privateRoute path ="/dashbord" element= {<Dashbord/>}/> */}
      </Routes>
      <Footer/>
     
    </div>
  );
}
export default App;
 