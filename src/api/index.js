import axios from 'axios';

const url = 'http://localhost:5000/users';

export const fetchUsers = (page, size) => axios.get(`${url}/${page}/${size}`);
export const getUser = (id) => axios.get(`${url}/${id}`);
export const getUsersByName = (page, size, username) => axios.get(`${url}/${page}/${size}?${username}`);
export const countUsers = () => axios.get(`${url}/count`);
export const createUser = (newUser) => axios.post(url, newUser);
export const likeUser = (id) => axios.patch(`${url}/${id}/likePost`);
export const updateUser = (id, updateUser) => axios.patch(`${url}/${id}`, updateUser);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);