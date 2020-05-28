import { ADD_USER, LOGOUT_USER, UPDATE_USER } from './types';
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
