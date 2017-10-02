import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

export function setPlaylist(playlist) {
  return {
    type: actionTypes.SET_PLAYLIST,
    payload: playlist,
  };
}

export function setPlaylists(playlists) {
  return {
    type: actionTypes.SET_PLAYLISTS,
    payload: playlists,
  };
}

// Async Actions

export function fetchPlaylist(id) {
  return async dispatch => {
    const playlist = await SC.get(`/playlists/${id}`);
    dispatch(setPlaylist(playlist));

    return playlist;
  };
}
