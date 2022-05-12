import axios from 'axios';

const API= axios.create({   baseURL : 'http//:localhost:8000/voiture' })



export const addVoiture = (Voiture) => API.post(`/add`,Voiture);
export const updateVoiture = (id,Voiture) => API.put(`/update/${id}`,Voiture);
export const deleteVoiture = (id) => API.delete(`/delete/${id}`);
export const getVoitures = () => API.get(`/get`);
export const getVoitureById = (email) => API.get(`/get/${email}`);