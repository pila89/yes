import axios from 'axios';




export const addUser = (user) => axios.post(`http://localhost:8000/user/add`,user);
export const updateUser = (id,user) => axios.put(`/update/${id}`,user);
export const deleteUser = (id) => axios.delete(`/delete/${id}`);
export const getUsers = () => axios.get(`/get`);
export const getUserById = (email) => axios.get(`/get/${email}`);

