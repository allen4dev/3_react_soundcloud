import reducer from './../reducer';
import * as actions from './../actions';

import { INITIAL_STATE } from './../model';

import fixtures from './fixtures';

describe('entities reducer', () => {
  it('@@INIT', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

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
      ...INITIAL_STATE,
      entities: { [track.id]: track },
    });
  });
});
