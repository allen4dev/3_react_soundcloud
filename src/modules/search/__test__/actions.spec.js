import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

describe('Action Creators', () => {
  it('should create an action to set the query', () => {
    const query = 'some search query';

    const expectedAction = {
      type: actionTypes.SET_QUERY,
      payload: query,
    };

    expect(actions.setQuery(query)).toEqual(expectedAction);
  });
});
