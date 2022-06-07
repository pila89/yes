import React, { useEffect } from "react";
import {Routes,Route } from "react-router-dom" ;
import Register from "./Pages/Navbarr/Register/Register";
import Admin from "./Pages/Contents/admin/Admin";
import Login from "./Pages/Navbarr/Login/Login";
import Footer from "./Pages/Footer/Footer";
import Profile from "./Pages/Profile/Profile";
import NavBar from "./Pages/Navbarr/Navbar/Navbar";
import Home from "./Pages/Navbarr/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCar from "./Pages/Contents/voiturecard/Addcar";
import EditCar from "./Pages/Contents/voiturecard/Editcar";

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
      <Route path ="/admin" element= {<Admin/>}/>
      <Route path ="/profile" element= {<Profile/>}/>
      <Route path ="/addCar" element= {<AddCar/>}/>
      <Route path ="/editCar/:carid" element= {<EditCar/>}/>

      {/* <privateRoute path ="/dashbord" element= {<Dashbord/>}/> */}
      </Routes>
      <Footer/>
     
    </div>
  );
}
export default App;
 