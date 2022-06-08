import { GET_CARS } from "../const/voiture";


const initialState = {
    voitures:[],  
    errors:null
}
export const carReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        
        case GET_CARS:
            return {...state,voitures:payload.data};
        
        default:
            return state;
    }
}