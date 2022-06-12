import {GET_CARS,ADD_CAR ,FAIL_CAR} from "../const/voiture";
import axios from "axios";

//get all Car
export const getAllVoiture=()=>async dispatch=>{
    try {
     const result= await axios.get("http://localhost:8000/voiture/") 
     
      dispatch ({type:GET_CARS,payload:result});
      
    } catch (error) {
       dispatch ({type:FAIL_CAR,payload:error.response.data}) 
    }
}

//ADD_CAR
export const addVoiture=(car)=>async dispatch=>{
    try {
        const result= await axios.post('http://localhost:8000/voiture/' ,car )
         dispatch({type: ADD_CAR, payload:result})
        ;
    } catch (error) {
        console.log(error)
        dispatch({type: FAIL_CAR , payload:error.response.data})
    }
}

//EDIT_CAR
 export const editVoiture=(id,voiture)=> dispatch =>{
        axios.put(`http://localhost:8000/voiture/${id}`,voiture)
        .then(res=>dispatch(getAllVoiture()))
        .catch(err=>console.log(err))
       }

//DELETE_CAR
export const deleteVoiture=(id)=>async(dispatch)=>{
       axios.delete(`http://localhost:8000/voiture/${id}`)
       .then(res=>dispatch(getAllVoiture()))
       .catch(err=>console.log(err))   
 }