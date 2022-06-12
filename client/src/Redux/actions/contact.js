import {GET_CONTACT,ADD_CONTACT ,FAIL_CONTACT} from "../const/contact";
import axios from "axios";

//get all Contact
export const getAllContacts=()=>async dispatch=>{
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

//EDIT_Contact
 export const editContact=(id,contact)=> dispatch =>{
        axios.put(`http://localhost:8000/contact/${id}`,contact)
        .then(res=>dispatch(getAllContacts()))
        .catch(err=>console.log(err))
       }

//DELETE_Contact
export const deleteContact=(id)=>async(dispatch)=>{
       axios.delete(`http://localhost:8000/contact/${id}`)
       .then(res=>dispatch(getAllContacts()))
       .catch(err=>console.log(err))   
 }