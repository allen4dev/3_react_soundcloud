import reducer from './../reducer';
import * as actions from './../actions';

import { INITIAL_STATE } from './../model';

import fixtures from './fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities reducer', () => {
  it('should handle SET_TRACKS', () => {
    const tracks = fixtures.getTracks(2);

    const nextState = reducer(INITIAL_STATE, actions.setTracks(tracks));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: tracks,
    });

    const newTracks = fixtures.getTracks(3);

    expect(reducer(nextState, actions.setTracks(newTracks))).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newTracks,
      },
    });
  });

  it('should handle SET_TRACK', () => {
    const track = fixtures.getTrack();

    const nextState = reducer(INITIAL_STATE, actions.setTrack(track));

    expect(nextState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        [track.id]: track,
      },
    });
  });
});

describe('comments reducer', () => {
  it('should handle SET_TRACK_COMMENTS', () => {
    const id = 123;
    const commentIds = ['comment1', 'comment2', 'comment3'];

    const nextState = reducer(
      INITIAL_STATE,
      actions.setTrackComments(id, commentIds)
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      comments: {
        [id]: commentIds,
      },
    });
  });

  it('should handle SET_NEXT_COMMENTS', () => {
    const id = 123;
    const commentIds = ['comment1', 'comment2', 'comment3'];
    const nextState = reducer(
      INITIAL_STATE,
      actions.setTrackComments(id, commentIds)
    );

    const newComments = ['comment4', 'comment5'];
    const newState = reducer(
      nextState,
      actions.setNextTrackComments(id, newComments)
    );

    expect(newState).toEqual({
      ...nextState,
      comments: {
        [id]: [...commentIds, ...newComments],
      },
    });
  });
});

describe('currentTrack reducer', () => {
  const id = 123;
  const nextState = reducer(INITIAL_STATE, actions.setCurrentTrack(id));

  expect(nextState).toEqual({
    ...INITIAL_STATE,
    currentTrack: id,
  });

  const newTrackId = 456;
  const newState = reducer(nextState, actions.setCurrentTrack(newTrackId));

  expect(newState).toEqual({
    ...nextState,
    currentTrack: newTrackId,
  });
});

describe('lastTracks reducer', () => {
  it('should handle SET_LAST_TRACKS', () => {
    const trackIds = ['track1', 'track2', 'track3'];
    const nextState = reducer(INITIAL_STATE, actions.setLastTracks(trackIds));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      lastTracks: trackIds,
    });

    const newTracks = ['track4', 'track5'];
    const newState = reducer(nextState, actions.setLastTracks(newTracks));

    expect(newState).toEqual({
      ...nextState,
      lastTracks: newTracks,
    });
  });
});
