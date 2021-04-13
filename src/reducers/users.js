import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, GET_USER_BY_ID, GET_USERS_BY_NAME } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case GET_USER_BY_ID:
      return action.payload;
    case GET_USERS_BY_NAME:
      return action.payload;
    case CREATE:
      return [...users, action.payload];
    case UPDATE:
      return users.map((users) => (users._id === action.payload._id ? action.payload : users));
    case DELETE:
      return users.filter((users) => users._id !== action.payload);
    case COUNT:
      return action.payload;

    default:
      return users;
  }
};