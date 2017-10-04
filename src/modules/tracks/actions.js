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

export function setTrackComments(id, commentIds) {
  return {
    type: actionTypes.SET_TRACK_COMMENTS,
    payload: { id, commentIds },
  };
}

export function setNextTrackComments(id, commentIds) {
  return {
    type: actionTypes.SET_NEXT_TRACK_COMMENTS,
    payload: { id, commentIds },
  };
}

export function setCurrentTrack(id) {
  return {
    type: actionTypes.SET_CURRENT_TRACK,
    payload: id,
  };
}

export function setLastTracks(trackIds) {
  return {
    type: actionTypes.SET_LAST_TRACKS,
    payload: trackIds,
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
    dispatch(setTrackComments(id, Object.keys(results)));

    return results;
  };
}

export function fetchTracksByDate(created_at = 'last_hour', limit = 12) {
  return async dispatch => {
    const response = await SC.get('/tracks', { created_at, limit });

    const cropTracks = response.map(track => {
      const copy = track;

      if (track.artwork_url) {
        copy.artwork_url = track.artwork_url.replace('-large', '-crop');
      }

      return copy;
    });

    const results = utils.arrayToObject(cropTracks);

    dispatch(setTracks(results));
    dispatch(setLastTracks(Object.keys(results)));

    return results;
  };
}
