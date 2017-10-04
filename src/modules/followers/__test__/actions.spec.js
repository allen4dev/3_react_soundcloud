import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

describe('action creators', () => {
  it('should create an action to add a list of user followers', () => {
    const userId = 123;
    const followers = ['user1', 'user2', 'user3'];

    const expectedAction = {
      type: actionTypes.SET_FOLLOWERS,
      payload: { userId, followers },
    };

    expect(actions.setFollowers(userId, followers)).toEqual(expectedAction);
  });

  it('should create an action to add a next list of user followers', () => {
    const userId = 123;
    const followers = ['user1', 'user2', 'user3'];

    const expectedAction = {
      type: actionTypes.SET_NEXT_FOLLOWERS,
      payload: { userId, followers },
    };

    expect(actions.setNextFollowers(userId, followers)).toEqual(expectedAction);
  });
});
