import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('ids reducer', () => {
  it('should handle SET_FOLLOWINGS', () => {
    const userId = 123;
    const followings = ['user1', 'user2', 'user3'];
    const nextState = reducer(
      INITIAL_STATE,
      actions.setFollowings(userId, followings),
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      ids: {
        [userId]: followings,
      },
    });
  });

  it('should handle SET_NEXT_USERS_FOLLOWINGS', () => {
    const userId = 123;
    const followings = ['user1', 'user2', 'user3'];
    const nextState = reducer(
      INITIAL_STATE,
      actions.setFollowings(userId, followings),
    );

    const newFollowings = ['user4', 'user5'];
    const newState = reducer(
      nextState,
      actions.setNextUsersFollowings(userId, newFollowings),
    );

    expect(newState).toEqual({
      ...nextState,
      ids: {
        [userId]: [...followings, ...newFollowings],
      },
    });
  });
});
