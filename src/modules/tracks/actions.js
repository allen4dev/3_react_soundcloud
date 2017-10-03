import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

import utils from './../../helpers/utils';

import comments from './../comments';

// Action Creators
export function setTrack(track) {
  return {
    type: actionTypes.SET_TRACK,
    payload: track,
  };
}

export function setTracks(tracks) {
  return {
    type: actionTypes.SET_TRACKS,
    payload: tracks,
  };
}

export function setComments(id, commentIds) {
  return {
    type: actionTypes.SET_COMMENTS,
    payload: { id, commentIds },
  };
}

export function setNextComments(id, commentIds) {
  return {
    type: actionTypes.SET_NEXT_COMMENTS,
    payload: { id, commentIds },
  };
}

// Async Actions
export function fetchTrack(id) {
  return async dispatch => {
    const track = await SC.get(`/tracks/${id}`);
    dispatch(setTrack(track));

    return track;
  };
}

export function fetchTrackComments(id) {
  return async dispatch => {
    const response = await SC.get(`tracks/${id}/comments`);
    const results = utils.arrayToObject(response);

    dispatch(comments.actions.setComments(results));
    dispatch(setComments(id, Object.keys(results)));

    return results;
  };
}
