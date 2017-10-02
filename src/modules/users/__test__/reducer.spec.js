import * as actionTypes from './../actionTypes';
import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities reducer', () => {
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
