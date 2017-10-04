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

  it('should create an action to add a list of comment ids for a track', () => {
    const id = 123;
    const commentIds = ['comment1', 'comment2', 'comment3'];

    const expectedAction = {
      type: actionTypes.SET_TRACK_COMMENTS,
      payload: { id, commentIds },
    };

    expect(actions.setTrackComments(id, commentIds)).toEqual(expectedAction);
  });

  it('should create an action to add a next list of comment ids for a track', () => {
    const id = 123;
    const commentIds = ['comment1', 'comment2', 'comment3'];

    const expectedAction = {
      type: actionTypes.SET_NEXT_TRACK_COMMENTS,
      payload: { id, commentIds },
    };

    expect(actions.setNextTrackComments(id, commentIds)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to set the current played track', () => {
    const id = 123;

    const expectedAction = {
      type: actionTypes.SET_CURRENT_TRACK,
      payload: id,
    };

    expect(actions.setCurrentTrack(id)).toEqual(expectedAction);
  });
});
