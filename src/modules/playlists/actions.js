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
