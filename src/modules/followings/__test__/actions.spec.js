import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

describe('action creators', () => {
  it('should create an action to add a list of users following a user', () => {
    const userId = 123;
    const followings = ['user1', 'user2', 'user3'];

    const expectedAction = {
      type: actionTypes.SET_FOLLOWINGS,
      payload: { userId, followings },
    };

    expect(actions.setFollowings(userId, followings)).toEqual(expectedAction);
  });

  it('should create an action to add a next list of users following a user', () => {
    const userId = 123;
    const followings = ['user1', 'user2', 'user3'];

    const expectedAction = {
      type: actionTypes.SET_NEXT_USERS_FOLLOWINGS,
      payload: { userId, followings },
    };

    expect(actions.setNextUsersFollowings(userId, followings)).toEqual(
      expectedAction,
    );
  });
});
