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

export function setNextTracks(trackIds) {
  return {
    type: actionTypes.SET_NEXT_TRACKS,
    payload: trackIds,
  };
}

export function setTracksNextPage(nextPage) {
  return {
    type: actionTypes.SET_TRACKS_NEXT_PAGE,
    payload: nextPage,
  };
}

export function setPlaylists(playlistIds) {
  return {
    type: actionTypes.SET_PLAYLISTS,
    payload: playlistIds,
  };
}

export function setNextPlaylists(playlistIds) {
  return {
    type: actionTypes.SET_NEXT_PLAYLISTS,
    payload: playlistIds,
  };
}

export function setPlaylistsNextPage(nextPage) {
  return {
    type: actionTypes.SET_PLAYLISTS_NEXT_PAGE,
    payload: nextPage,
  };
}

export function setUsers(usersIds) {
  return {
    type: actionTypes.SET_USERS,
    payload: usersIds,
  };
}

export function setNextUsers(usersIds) {
  return {
    type: actionTypes.SET_NEXT_USERS,
    payload: usersIds,
  };
}

export function setUsersNextPage(nextPage) {
  return {
    type: actionTypes.SET_USERS_NEXT_PAGE,
    payload: nextPage,
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
      SC.get(`/playlists/${playlist.id}`)
    );

    const resolved = await Promise.all(completePlaylists);
    const filtered = resolved.map(utils.filterPlaylist);

    const trackIds = filtered.reduce((obj, playlist) => {
      const ids = playlist.tracks.map(track => track.id);
      return {
        ...obj,
        [playlist.id]: ids,
      };
    }, {});
    // const playlistTracks = filtered.map(playlist => playlist.tracks);

    const playlistTracks = filtered.reduce(
      (arr, playlist) => [...arr, ...playlist.tracks],
      []
    );

    const tracksObj = playlistTracks.reduce(
      (obj, track) => ({
        ...obj,
        [track.id]: track,
      }),
      {}
    );
    const results = utils.arrayToObject(filtered);

    dispatch(playlists.actions.setPlaylists(results));
    dispatch(tracks.actions.setTracks(tracksObj));
    dispatch(playlists.actions.setPlaylistsTracks(trackIds));
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
