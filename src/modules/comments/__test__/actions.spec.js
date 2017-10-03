import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './fixtures/';

describe('action creators', () => {
  it('should create an action to add a comment', () => {
    const comment = fixtures.getComment();

    const expectedAction = {
      type: actionTypes.SET_COMMENT,
      payload: comment,
    };

    expect(actions.setComment(comment)).toEqual(expectedAction);
  });

  it('should create an action to add a list of comment', () => {
    const comments = fixtures.getComments(3);

    const expectedAction = {
      type: actionTypes.SET_COMMENTS,
      payload: comments,
    };

    expect(actions.setComments(comments)).toEqual(expectedAction);
  });
});
