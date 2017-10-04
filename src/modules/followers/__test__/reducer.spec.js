import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('ids reducer', () => {
  it('should handle SET_FOLLOWERS', () => {
    const userId = 123;
    const followers = ['user1', 'user2', 'user3'];
    const nextState = reducer(
      INITIAL_STATE,
      actions.setFollowers(userId, followers),
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      ids: {
        [userId]: followers,
      },
    });
  });

  it('should handle SET_NEXT_FOLLOWERS', () => {
    const userId = 123;
    const followers = ['user1', 'user2', 'user3'];
    const nextState = reducer(
      INITIAL_STATE,
      actions.setFollowers(userId, followers),
    );

    const newFollowers = ['user4', 'user5'];
    const newState = reducer(
      nextState,
      actions.setNextFollowers(userId, newFollowers),
    );

    expect(newState).toEqual({
      ...nextState,
      ids: {
        [userId]: [...followers, ...newFollowers],
      },
    });
  });
});
