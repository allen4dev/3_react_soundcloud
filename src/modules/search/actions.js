import SC from './../../helpers/soundcloud';

import * as actionTypes from './actionTypes';

import tracks from './../tracks';

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
