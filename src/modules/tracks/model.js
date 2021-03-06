// @flow

import * as actionTypes from './actionTypes';

// types
// Refactor: Change the user object for the type User
export type Track = {
  id: number,
  created_at: string,
  title: string,
  duration: number,
  sharing: string,
  uri: string,
  user_id: number,
  artwork_url: string,
  comment_count: number,
  description: string,
  genre: string,
  playback_count: number,
  repost_count: number,
  user: {
    avatar_url: string,
    id: number,
    uri: string,
    username: string,
  },
  likes_count: number,
};

export type Tracks = {
  [id: string]: Track,
};

// State
type STATE = {
  entities: {},
  comments: {},
  currentTrack: string,
  lastTracks: Array<string>,
};

// Actions
export type SET_TRACKS = {
  type: actionTypes.SET_TRACKS,
  payload: Tracks,
};

export type SET_TRACK = {
  type: actionTypes.SET_TRACK,
  payload: Track,
};

export type Action = SET_TRACK | SET_TRACKS;

// feature stuff
export const INITIAL_STATE: STATE = {
  entities: {},
  comments: {},
  currentTrack: '',
  lastTracks: [],
};

export const some = 2;
