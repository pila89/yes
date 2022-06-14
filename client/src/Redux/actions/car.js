import {GET_CARS,ADD_CAR ,FAIL_CAR} from "../const/car";
import axios from "axios";

//get all Car
export const getAllCars=()=>async dispatch=>{
    try {
     const result= await axios.get("http://localhost:8000/car/") 
     
      dispatch ({type:GET_CARS,payload:result.data});
      
    } catch (error) {
       dispatch ({type:FAIL_CAR,payload:error.response.data}) 
    }
}

//ADD_CAR
export const addCar=(car)=>async dispatch=>{
    try {
        const result= await axios.post("http://localhost:8000/car/" ,car )
         dispatch({type: ADD_CAR, payload:result})
        ;
    } catch (error) {
        console.log(error)
        dispatch({type: FAIL_CAR , payload:error.response.data})
    }
}

//EDIT_CAR
 export const editCar=(id,car)=> dispatch =>{
        axios.put(`http://localhost:8000/car/${id}`,car)
        .then(res=>dispatch(getAllCars()))
        .catch(err=>console.log(err))
       }

//DELETE_CAR
export const deleteCar=(id)=>async(dispatch)=>{
       axios.delete(`http://localhost:8000/car/${id}`)
       .then(res=>dispatch(getAllCars()))
       .catch(err=>console.log(err))   
 }