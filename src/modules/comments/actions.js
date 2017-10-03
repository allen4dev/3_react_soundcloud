import * as actionTypes from './actionTypes';

export function setComment(comment) {
  return {
    type: actionTypes.SET_COMMENT,
    payload: comment,
  };
}

export function setComments(comments) {
  return {
    type: actionTypes.SET_COMMENTS,
    payload: comments,
  };
}
