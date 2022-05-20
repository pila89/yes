import { LOAD_USER,REGISTER_USER,LOGIN_USER,FAIL_USER, CURRENT_USER ,LOGOUT_USER} from "../const/user";
import axios from "axios";

//registerUser
export const registerUser=(user)=>async dispatch=>{
    dispatch ({ type:LOAD_USER});
    try {
     const result= await  axios.post("/user/register",user) //{newUser,msg,token}
     
      dispatch ({type:REGISTER_USER,payload:result.data});
    } catch (error) {
       dispatch ({type:FAIL_USER,payload:error.response.data}) 
    }
    
}

//loginUser
export const loginUser=(user)=>async dispatch=>{
    dispatch ({ type:LOAD_USER});
    try {
     const result= await  axios.post("/user/login",user) //{newUser,msg,token}
      dispatch ({type:LOGIN_USER,payload:result.data});
    } catch (error) {
       dispatch ({type:FAIL_USER,payload:error.response.data}) 
    }
    
}
//current
export const current=()=> async dispatch=>{
    dispatch({type:LOAD_USER});
    const options={
      headers:{
        authorization:localStorage.getItem("token")
      }
    }
    try {
      let result= await axios.get("/user/current",options); // return current user
      dispatch({type:CURRENT_USER, payload:result.data.user})
    } catch (error) {
      
    }
  }

  //logout
  export const logout=()=>{
    return {
      type:LOGOUT_USER
    };
  }
  