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

export function searchTracks(query, limit = 10) {
  return async dispatch => {
    const response = await SC.get('/tracks', { q: query, limit });
    const filtered = response.map(utils.filterTrack);

    const results = utils.arrayToObject(filtered);
    const keys = Object.keys(results);

    dispatch(tracks.actions.setTracks(results));
    dispatch(setTracks(keys));

    return Object.values(results);
  };
}

export function searchPlaylists(query, limit = 10) {
  return async dispatch => {
    const response = await SC.get('/playlists', { q: query, limit });

    const completePlaylists = response.map(playlist =>
      SC.get(`/playlists/${playlist.id}`),
    );

    const resolved = await Promise.all(completePlaylists);
    const filtered = resolved.map(utils.filterPlaylist);

    const results = utils.arrayToObject(filtered);

    dispatch(playlists.actions.setPlaylists(results));
    dispatch(setPlaylists(Object.keys(results)));

    return results;
  };
}

export function searchUsers(query, limit = 10) {
  return async dispatch => {
    const response = await SC.get('/users', { q: query, limit });
    const filtered = response.map(utils.filterUser);

    const results = utils.arrayToObject(filtered);
    dispatch(users.actions.setUsers(results));
    dispatch(setUsers(Object.keys(results)));

    return results;
  };
}
