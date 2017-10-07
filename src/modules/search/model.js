// @flow

type STATE = {
  query: {
    current: '',
    prev: '',
  },
  tracks: Array<string>,
  playlists: Array<string>,
  users: Array<string>,
  pagination: {
    tracks: string,
    playlists: string,
    users: string,
  },
};

export const INITIAL_STATE: STATE = {
  query: {
    current: '',
    prev: '',
  },
  tracks: [],
  playlists: [],
  users: [],
  pagination: {
    tracks: '',
    playlists: '',
    users: '',
  },
};

export const dummie = 42;
