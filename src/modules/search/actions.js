import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';
import tracks from './../tracks';
import playlists from './../playlists';

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
    const results = response.reduce(
      (obj, track) => ({
        ...obj,
        [track.id]: track,
      }),
      {},
    );

    dispatch(tracks.actions.setTracks(results));
    dispatch(setTracks(Object.keys(results)));

    return results;
  };
}

// export function searchPlaylists(query) {
//   return async dispatch => {
//     const response = await SC.get('/playlists', { q: query });
//     const results = utils.arrayToObject(response);

//     dispatch(playlists.actions.)
//   };
// }
