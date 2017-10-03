import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './fixtures';

describe('action creators', () => {
  it('should create an action to add a single user', () => {
    const user = fixtures.getUser();

    const expectedAction = {
      type: actionTypes.SET_USER,
      payload: user,
    };

    expect(actions.setUser(user)).toEqual(expectedAction);
  });

  it('should create an action to add a single user', () => {
    const users = fixtures.getUsers(2);

    const expectedAction = {
      type: actionTypes.SET_USERS,
      payload: users,
    };

    expect(actions.setUsers(users)).toEqual(expectedAction);
  });

  it('should create an action to add a list of users', () => {
    const users = fixtures.getUsers(2);

    const expectedAction = {
      type: actionTypes.SET_USERS,
      payload: users,
    };

    expect(actions.setUsers(users)).toEqual(expectedAction);
  });

  it('should create an action to add a list of user tracks', () => {
    const id = 123;
    const trackIds = ['track1', 'track2', 'track3'];

    const expectedAction = {
      type: actionTypes.SET_USER_TRACKS,
      payload: { id, trackIds },
    };

    expect(actions.setUserTracks(id, trackIds)).toEqual(expectedAction);
  });

  it('should create an action to add a more tracks of user tracks', () => {
    const id = 123;
    const trackIds = ['track1', 'track2', 'track3'];

    const expectedAction = {
      type: actionTypes.SET_NEXT_USER_TRACKS,
      payload: { id, trackIds },
    };

    expect(actions.setNextUserTracks(id, trackIds)).toEqual(expectedAction);
  });
});
