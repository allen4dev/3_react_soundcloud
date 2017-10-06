import React from 'react';
import { arrayOf, object } from 'prop-types';

import Comment from './../Comment';

import './index.css';

const CommentList = ({ items }) => (
  <div className="CommentList">
    <div className="CommentList-title">
      <span className="CommentList-icon icon-mail-forward" />
      {items.length} comentarios
    </div>
    {items.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
);

CommentList.propTypes = {
  items: arrayOf(object).isRequired,
};

export default CommentList;
