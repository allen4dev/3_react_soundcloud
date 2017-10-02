// @flow

type STATE = {
  query: string,
  tracks: Array<string>,
  playlists: Array<string>,
  users: Array<string>,
};

export const INITIAL_STATE: STATE = {
  query: '',
  tracks: [],
  playlists: [],
  users: [],
};

export const dummie = 42;
