import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './fixtures';

describe('Action Creators: Tracks', () => {
  it('should create an action to add tracks', () => {
    const tracks = fixtures.getTracks(2);

    const expectedAction = {
      type: actionTypes.SET_TRACKS,
      payload: tracks,
    };

    expect(actions.setTracks(tracks)).toEqual(expectedAction);
  });
});
