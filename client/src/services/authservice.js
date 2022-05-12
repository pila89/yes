import axios from 'axios';


export const login = (crd) => axios.post(`http://localhost:8000/xxxx/login`,crd);