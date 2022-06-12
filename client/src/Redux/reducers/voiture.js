import { GET_CARS ,ADD_CAR,FAIL_CAR} from "../const/voiture";


const initialState = {
    voitures:[],  
    errors:null
}
export const carReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        
        case GET_CARS:
            return {...state,voitures:payload.data};
        case ADD_CAR:
            return {...state,voitures:payload.data};
        case FAIL_CAR:
            return {...state,errors:payload,voitures:[]};
        default:
            return {...state,voitures:payload};
    }
}
