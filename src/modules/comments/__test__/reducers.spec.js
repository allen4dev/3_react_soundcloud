import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities reducer', () => {
  it('should handle SET_COMMENT', () => {
    const comment = fixtures.getComment();
    const nextState = reducer(INITIAL_STATE, actions.setComment(comment));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: {
        [comment.id]: comment,
      },
    });

    const newComment = fixtures.getComment();
    const newState = reducer(nextState, actions.setComment(newComment));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        [newComment.id]: newComment,
      },
    });
  });

  it('should handle SET_COMMENTS', () => {
    const comments = fixtures.getComments(3);
    const nextState = reducer(INITIAL_STATE, actions.setComments(comments));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: comments,
    });

    const newComments = fixtures.getComments(2);
    const newState = reducer(nextState, actions.setComments(newComments));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newComments,
      },
    });
  });
});
