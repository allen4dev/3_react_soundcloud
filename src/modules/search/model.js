// @flow

type STATE = {
  query: {
    current: '',
    prev: '',
  },
  tracks: Array<string>,
  playlists: Array<string>,
  users: Array<string>,
};

export const INITIAL_STATE: STATE = {
  query: {
    current: '',
    prev: '',
  },
  tracks: [],
  playlists: [],
  users: [],
};

export const dummie = 42;
