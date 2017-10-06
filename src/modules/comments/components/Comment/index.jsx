import React from 'react';
import { shape, number, string } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';

import './index.css';

const Comment = props => {
  const src = props.avatar_url || defaultImage;

  return (
    <div className="Comment">
      <Link to={`/user/${props.user.id}`} className="Comment-avatar">
        <Image src={src} description={props.user.username} />
      </Link>

      <div className="Comment-info">
        <div className="Comment-heading">
          <span className="Comment-username">{props.user.username}</span>
          <span className="Comment-date">{props.timestamp}</span>
        </div>
        <p className="Comment-body">{props.body}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  avatar_url: string.isRequired,
  user: shape({
    id: number,
    username: string,
  }).isRequired,
  body: string.isRequired,
  timestamp: number.isRequired,
};

export default Comment;
