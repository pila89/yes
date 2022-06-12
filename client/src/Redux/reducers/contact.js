import {  ADD_CONTACT ,GET_CONTACT,FAIL_CONTACT} from "../const/contact";


const initialState = {
    contacts:[],  
    errors:null
}
export const contactReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        
        case  ADD_CONTACT:
            return {...state,contacts:payload.data};
        case GET_CONTACT:
            return {...state,contacts:payload.data};
        case FAIL_CONTACT:
            return {...state,errors:payload,contacts:[]};
        default:
            return state;
    }
}