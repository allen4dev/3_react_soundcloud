// @flow

import reducer from './../reducer';
import * as actions from './../actions';

import { INITIAL_STATE } from './../model';

import fixtures from './fixtures';

describe('Reducer: Tracks', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle SET_TRACKS: entitiesReducer', () => {
    const tracks = fixtures.getTracks(2);

    const nextState = reducer(INITIAL_STATE, actions.setTracks(tracks));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: tracks,
    });

    const newTracks = fixtures.getTracks(3);

    expect(reducer(nextState, actions.setTracks(newTracks))).toEqual({
      ...INITIAL_STATE,
      entities: {
        ...nextState.entities,
        ...newTracks,
      },
    });
  });
});
