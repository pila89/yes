import { GET_CARS ,ADD_CAR,FAIL_CAR} from "../const/car";

const initialState = {
   
    errors:null,
    cars:null
}
export const carReducer=(state=initialState,{type,payload})=>{
    
    switch (type) {
        
        case GET_CARS:
            return {...state,cars:payload};
        case ADD_CAR:
            return {...state,cars:payload};
        case FAIL_CAR:
            return {...state,errors:null};
        default:
            return state;
    }
}
