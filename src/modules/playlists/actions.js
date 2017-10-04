import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

import tracks from './../tracks';
import utils from './../../helpers/utils';

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

export function setPlaylistTracks(id, trackIds) {
  return {
    type: actionTypes.SET_PLAYLIST_TRACKS,
    payload: { id, trackIds },
  };
}

export function setNextTracks(id, trackIds) {
  return {
    type: actionTypes.SET_NEXT_TRACKS,
    payload: { id, trackIds },
  };
}

// Async Actions

export function fetchPlaylist(id) {
  return async dispatch => {
    const playlist = await SC.get(`/playlists/${id}`);

    const playlistTracks = utils.arrayToObject(playlist.tracks);

    dispatch(setPlaylist(playlist));
    dispatch(tracks.actions.setTracks(playlistTracks));
    dispatch(setPlaylistTracks(id, Object.keys(playlistTracks)));

    return playlist;
  };
}
