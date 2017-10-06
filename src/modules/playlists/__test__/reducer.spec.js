import reducer from './../reducer';
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

  it('should handle SET_PLAYLISTS_TRACKS', () => {
    const id1 = 123;
    const id2 = 456;

    const id1Tracks = ['track1', 'track2'];
    const id2Tracks = ['track3', 'track4'];

    const payload = {
      [id1]: id1Tracks,
      [id2]: id2Tracks,
    };

    const nextState = reducer(
      INITIAL_STATE,
      actions.setPlaylistsTracks(payload),
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      tracks: payload,
    });

    const id3 = 789;
    const id4 = 852;

    const id3Tracks = ['track5', 'track6'];
    const id4Tracks = ['track7', 'track8'];

    const newPayload = {
      [id3]: id3Tracks,
      [id4]: id4Tracks,
    };

    const newState = reducer(nextState, actions.setPlaylistsTracks(newPayload));

    expect(newState).toEqual({
      ...nextState,
      tracks: {
        ...payload,
        ...newPayload,
      },
    });
  });
});
