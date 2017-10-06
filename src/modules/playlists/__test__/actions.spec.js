import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './fixtures';

describe('Action creators', () => {
  it('should create an action to add a playlist', () => {
    const playlist = fixtures.getPlaylist();

    const expectedAction = {
      type: actionTypes.SET_PLAYLIST,
      payload: playlist,
    };

    expect(actions.setPlaylist(playlist)).toEqual(expectedAction);
  });

  it('should create an action to add a list of playlists', () => {
    const playlists = fixtures.getPlaylists(2);

    const expectedAction = {
      type: actionTypes.SET_PLAYLISTS,
      payload: playlists,
    };

    expect(actions.setPlaylists(playlists)).toEqual(expectedAction);
  });

  it('should create an action to add a list of tracks of a playlist', () => {
    const trackIds = ['track1', 'track2'];
    const id = 852;

    const expectedAction = {
      type: actionTypes.SET_PLAYLIST_TRACKS,
      payload: { id, trackIds },
    };

    expect(actions.setPlaylistTracks(id, trackIds)).toEqual(expectedAction);
  });

  it('should create an action to add a multiple list of playlist tracks', () => {
    const id1 = 123;
    const id2 = 456;

    const id1Tracks = ['track1', 'track2'];
    const id2Tracks = ['track3', 'track4'];

    const payload = {
      [id1]: id1Tracks,
      [id2]: id2Tracks,
    };

    const expectedAction = {
      type: actionTypes.SET_PLAYLISTS_TRACKS,
      payload,
    };

    expect(actions.setPlaylistsTracks(payload)).toEqual(expectedAction);
  });
});
