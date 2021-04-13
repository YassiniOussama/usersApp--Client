import { CREATE, UPDATE, DELETE} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getUsers = (page, size) => async () => {
  try {
    const { data } = await api.fetchUsers(page, size);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (id) => async () => {
  try {
    const { data } = await api.getUser(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsersByName = (page, size, username) => async () => {
  try {
    const { data } = await api.getUsersByName(page, size, username);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountUsers = async () => {
  try {
    const count = await api.countUsers();
    return count;
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};