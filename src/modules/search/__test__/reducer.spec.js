import * as actions from './../actions';
import reducer from './../reducer';

import { INITIAL_STATE } from './../model';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('query reducer', () => {
  it('should handle SET_QUERY', () => {
    const query = 'an awesome track, playlist or user';
    const nextState = reducer(INITIAL_STATE, actions.setQuery(query));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      query: {
        current: query,
        prev: '',
      },
    });

    const newQuery = 'this is a more awesome search';
    const newState = reducer(nextState, actions.setQuery(newQuery));

    expect(newState).toEqual({
      ...nextState,
      query: {
        current: newQuery,
        prev: query,
      },
    });
  });
});

describe('tracks reducer', () => {
  it('should handle SET_TRACKS', () => {
    const trackIds = ['track1', 'track2', 'track3'];

    const nextState = reducer(INITIAL_STATE, actions.setTracks(trackIds));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      tracks: trackIds,
    });

    const newTracks = ['track4', 'track5'];

    expect(reducer(nextState, actions.setTracks(newTracks))).toEqual({
      ...nextState,
      tracks: newTracks,
    });
  });

  it('should handle SET_NEXT_TRACKS', () => {
    const trackIds = ['track1', 'track2', 'track3'];
    const nextState = reducer(INITIAL_STATE, actions.setTracks(trackIds));

    const newResults = ['track4', 'track5', 'track6'];
    const newState = reducer(nextState, actions.setNextTracks(newResults));

    expect(newState).toEqual({
      ...nextState,
      tracks: [...trackIds, ...newResults],
    });
  });
});

describe('playlists reducer', () => {
  it('should handle SET_PLAYLISTS', () => {
    const playlistIds = ['playlist1', 'playlist2', 'playlist3'];

    const nextState = reducer(INITIAL_STATE, actions.setPlaylists(playlistIds));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      playlists: playlistIds,
    });

    const newPlaylists = ['playlist4', 'playlist5'];

    const newState = reducer(nextState, actions.setPlaylists(newPlaylists));

    expect(newState).toEqual({
      ...nextState,
      playlists: newPlaylists,
    });
  });

  it('should handle SET_NEXT_PLAYLISTS', () => {
    const playlistIds = ['playlist1', 'playlist2', 'playlist3'];
    const nextState = reducer(INITIAL_STATE, actions.setPlaylists(playlistIds));

    const newResults = ['playlist4', 'playlist5', 'playlist6'];
    const newState = reducer(nextState, actions.setNextPlaylists(newResults));

    expect(newState).toEqual({
      ...nextState,
      playlists: [...playlistIds, ...newResults],
    });
  });
});

describe('users reducer', () => {
  it('should handle SET_USERS', () => {
    const usersIds = ['user1', 'user2', 'user3'];

    const nextState = reducer(INITIAL_STATE, actions.setUsers(usersIds));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      users: usersIds,
    });

    const newUsers = ['user4', 'user5'];

    const newState = reducer(nextState, actions.setUsers(newUsers));

    expect(newState).toEqual({
      ...nextState,
      users: newUsers,
    });
  });

  it('should handle SET_NEXT_USERS', () => {
    const userIds = ['user1', 'user2', 'user3'];
    const nextState = reducer(INITIAL_STATE, actions.setUsers(userIds));

    const newResults = ['user4', 'user5', 'user6'];
    const newState = reducer(nextState, actions.setNextUsers(newResults));

    expect(newState).toEqual({
      ...nextState,
      users: [...userIds, ...newResults],
    });
  });
});

describe('pagination reducer', () => {
  it('should handle SET_TRACKS_NEXT_PAGE', () => {
    const nextPage = 'https://example.test/tracks/next-page';
    const nextState = reducer(
      INITIAL_STATE,
      actions.setTracksNextPage(nextPage)
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      pagination: {
        ...INITIAL_STATE.pagination,
        tracks: nextPage,
      },
    });

    const newPage = 'https://example.test/tracks/new-page';
    const newState = reducer(nextState, actions.setTracksNextPage(newPage));

    expect(newState).toEqual({
      ...nextState,
      pagination: {
        ...nextState.pagination,
        tracks: newPage,
      },
    });
  });

  it('should handle SET_PLAYLISTS_NEXT_PAGE', () => {
    const nextPage = 'https://example.test/playlists/next-page';
    const nextState = reducer(
      INITIAL_STATE,
      actions.setPlaylistsNextPage(nextPage)
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      pagination: {
        ...INITIAL_STATE.pagination,
        playlists: nextPage,
      },
    });

    const newPage = 'https://example.test/playlists/new-page';
    const newState = reducer(nextState, actions.setPlaylistsNextPage(newPage));

    expect(newState).toEqual({
      ...nextState,
      pagination: {
        ...nextState.pagination,
        playlists: newPage,
      },
    });
  });

  it('should handle SET_USERS_NEXT_PAGE', () => {
    const nextPage = 'https://example.test/users/next-page';
    const nextState = reducer(
      INITIAL_STATE,
      actions.setUsersNextPage(nextPage)
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      pagination: {
        ...INITIAL_STATE.pagination,
        users: nextPage,
      },
    });

    const newPage = 'https://example.test/users/new-page';
    const newState = reducer(nextState, actions.setUsersNextPage(newPage));

    expect(newState).toEqual({
      ...nextState,
      pagination: {
        ...nextState.pagination,
        users: newPage,
      },
    });
  });
});
