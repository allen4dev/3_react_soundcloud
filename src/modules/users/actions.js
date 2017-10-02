import * as actionTypes from './actionTypes';

export function setUser(user) {
  return {
    type: actionTypes.SET_USER,
    payload: user,
  };
}

export function setUsers(users) {
  return {
    type: actionTypes.SET_USERS,
    payload: users,
  };
}
