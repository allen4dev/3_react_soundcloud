import * as actions from './../actions';
import reducer from './../reducer';

import { INITIAL_STATE } from './../model';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('query reducer', () => {
  it('should handle SET_QUERY', () => {
    const query = 'an awesome track, playlist or user';

    const nextState = reducer(INITIAL_STATE.query, actions.setQuery(query));

    expect(nextState).toEqual({ ...INITIAL_STATE, query });

    const nextQuery = 'another awesome track, playlist or user';

    expect(reducer(nextState, actions.setQuery(nextQuery))).toEqual({
      ...nextState,
      query: nextQuery,
    });
  });
});
