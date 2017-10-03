import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities reducer', () => {
  it('should handle SET_USER', () => {
    const user = fixtures.getUser();
    const nextState = reducer(INITIAL_STATE, actions.setUser(user));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: { [user.id]: user },
    });

    const newUser = fixtures.getUser();
    const newState = reducer(nextState, actions.setUser(newUser));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        [newUser.id]: newUser,
      },
    });
  });

  it('should handle SET_USERS', () => {
    const users = fixtures.getUsers(3);
    const nextState = reducer(INITIAL_STATE, actions.setUsers(users));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: users,
    });
  });

  it('should handle SET_USER_TRACKS', () => {
    const id = 123;
    const trackIds = ['track1', 'track2', 'track3'];

    const nextState = reducer(
      INITIAL_STATE,
      actions.setUserTracks(id, trackIds),
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      tracks: {
        [id]: trackIds,
      },
    });
  });

  it('should handle SET_NEXT_USER_TRACKS', () => {
    const id = 123;
    const trackIds = ['track1', 'track2', 'track3'];

    const nextState = reducer(
      INITIAL_STATE,
      actions.setUserTracks(id, trackIds),
    );

    const newTracks = ['track4', 'track5'];
    const newState = reducer(
      nextState,
      actions.setNextUserTracks(id, newTracks),
    );

    expect(newState).toEqual({
      ...nextState,
      tracks: {
        [id]: [...trackIds, ...newTracks],
      },
    });
  });
});
