import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './fixtures';

describe('Action Creators', () => {
  it('should create an action to add tracks', () => {
    const tracks = fixtures.getTracks(2);

    const expectedAction = {
      type: actionTypes.SET_TRACKS,
      payload: tracks,
    };

    expect(actions.setTracks(tracks)).toEqual(expectedAction);
  });

  it('should create an action to add a single track', () => {
    const track = fixtures.getTrack();

    const expectedAction = {
      type: actionTypes.SET_TRACK,
      payload: track,
    };

    expect(actions.setTrack(track)).toEqual(expectedAction);
  });
});
