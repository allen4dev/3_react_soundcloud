// @flow

import * as actionTypes from './actionTypes';

import type { Track, Tracks, SET_TRACK, SET_TRACKS } from './model';

// Action Creators
export function setTrack(track: Track): SET_TRACK {
  return {
    type: actionTypes.SET_TRACK,
    payload: track,
  };
}

export function setTracks(tracks: Tracks): SET_TRACKS {
  return {
    type: actionTypes.SET_TRACKS,
    payload: tracks,
  };
}

// Async Actions

