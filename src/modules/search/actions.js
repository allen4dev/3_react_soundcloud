import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';
import tracks from './../tracks';
import playlists from './../playlists';
import users from './../users';

import utils from './../../helpers/utils';

export function setQuery(query) {
  return {
    type: actionTypes.SET_QUERY,
    payload: query,
  };
}

export function setTracks(trackIds) {
  return {
    type: actionTypes.SET_TRACKS,
    payload: trackIds,
  };
}

export function setPlaylists(playlistIds) {
  return {
    type: actionTypes.SET_PLAYLISTS,
    payload: playlistIds,
  };
}

export function setUsers(usersIds) {
  return {
    type: actionTypes.SET_USERS,
    payload: usersIds,
  };
}

// Async Actions

export function searchTracks(query) {
  return async dispatch => {
    const response = await SC.get('/tracks', { q: query });
    const cropTracks = response.map(track => {
      const copy = track;

      if (track.artwork_url) {
        copy.artwork_url = track.artwork_url.replace('-large', '-crop');
      }

      return copy;
    });

    const results = utils.arrayToObject(cropTracks);
    const keys = Object.keys(results);

    dispatch(tracks.actions.setTracks(results));
    dispatch(setTracks(keys));

    return Object.values(results);
  };
}

export function searchPlaylists(query) {
  return async dispatch => {
    const response = await SC.get('/playlists', { q: query });
    const results = utils.arrayToObject(response);

    dispatch(playlists.actions.setPlaylists(results));
    dispatch(setPlaylists(Object.keys(results)));

    return results;
  };
}

export function searchUsers(query) {
  return async dispatch => {
    const response = await SC.get('/users', { q: query });
    const results = utils.arrayToObject(response);
    dispatch(users.actions.setUsers(results));
    dispatch(setUsers(Object.keys(results)));

    return results;
  };
}
