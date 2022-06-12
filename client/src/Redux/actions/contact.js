import {GET_CONTACT,ADD_CONTACT ,FAIL_CONTACT} from "../const/contact";
import axios from "axios";

//get all Contact
export const getAllVoiture=()=>async dispatch=>{
    try {
     const result= await axios.get("http://localhost:8000/contact/") 
     
      dispatch ({type:GET_CONTACT,payload:result});
      
    } catch (error) {
       dispatch ({type:FAIL_CONTACT,payload:error.response.data}) 
    }
}

//ADD_Contact
export const addContact=(contact)=>async dispatch=>{
    try {
        const result= await axios.post('http://localhost:8000/contact/' ,contact )
         dispatch({type: ADD_CONTACT, payload:result})
        ;
    } catch (error) {
        console.log(error)
        dispatch({type: FAIL_CONTACT , payload:error.response.data})
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