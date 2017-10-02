import reducer from './../reducer';
import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import { INITIAL_STATE } from './../model';

import fixtures from './fixtures/';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities reducer', () => {
  it('should handle SET_PLAYLISTS', () => {
    const playlists = fixtures.getPlaylists(3);
    const nextState = reducer(INITIAL_STATE, actions.setPlaylists(playlists));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: playlists,
    });

    const newPlaylists = fixtures.getPlaylists(2);
    const newState = reducer(nextState, actions.setPlaylists(newPlaylists));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newPlaylists,
      },
    });
  });

  it('should handle SET_PLAYLIST', () => {
    const playlist = fixtures.getPlaylist();
    const nextState = reducer(INITIAL_STATE, actions.setPlaylist(playlist));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: { [playlist.id]: playlist },
    });

    const newPlaylist = fixtures.getPlaylist();
    const newState = reducer(nextState, actions.setPlaylist(newPlaylist));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        [newPlaylist.id]: newPlaylist,
      },
    });
  });
});

describe('tracks reducer', () => {
  it('should handle SET_TRACKS', () => {
    const id = 123;
    const trackIds = ['track1', 'track2', 'track3'];

    const nextState = reducer(
      INITIAL_STATE,
      actions.setPlaylistTracks(id, trackIds),
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      tracks: {
        [id]: trackIds,
      },
    });
  });

  it('should handle SET_NEXT_TRACKS', () => {
    const id = 123;
    const trackIds = ['track1', 'track2', 'track3'];
    const nextState = reducer(
      INITIAL_STATE,
      actions.setPlaylistTracks(id, trackIds),
    );

    const newTracks = ['track4', 'track5'];
    const newState = reducer(nextState, actions.setNextTracks(id, newTracks));

    expect(newState).toEqual({
      ...nextState,
      tracks: {
        [id]: [...trackIds, ...newTracks],
      },
    });
  });
});
