import * as actions from './../actions';
import reducer from './../reducer';

import { INITIAL_STATE } from './../model';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('reducer', () => {
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
      tracks: [...nextState.tracks, ...newTracks],
    });
  });

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
      playlists: [...nextState.playlists, ...newPlaylists],
    });
  });

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
      users: [...nextState.users, ...newUsers],
    });
  });
});
