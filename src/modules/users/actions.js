import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

// Action creators
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

// Async actions

export function fetchUser(id) {
  return async dispatch => {
    const user = await SC.get(`/users/${id}`);

    dispatch(setUser(user));
    return user;
  };
}
