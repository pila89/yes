import {DELETE_CAR,GET_CARS,ADD_CAR,EDIT_CAR, FAIL_CAR} from "../const/voiture";
import axios from "axios";

//getCar
export const getCars=()=>async dispatch=>{
    try {
     const result= await axios.get("http://localhost:8000/voiture/") 
     
      dispatch ({type:GET_CARS,payload:result});
      
    } catch (error) {
       dispatch ({type:FAIL_CAR,payload:error.response.data}) 
    }
}

//ADD_CAR

//EDIT_CAR

//DELETE_CAR

