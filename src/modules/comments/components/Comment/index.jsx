import React from 'react';
import { string } from 'prop-types';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';

import './index.css';

const Comment = props => {
  const src = props.avatar_url || defaultImage;

  return (
    <div className="Comment">
      <div className="Comment-avatar">
        <Image src={src} description="allen4dev" />
      </div>

      <div className="Comment-info">
        <div className="Comment-heading">
          <span className="Comment-username">allen4dev</span>
          <span className="Comment-date">9 minutos</span>
        </div>
        <p className="Comment-body">Some comment about the track</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  avatar_url: string.isRequired,
};

export default Comment;
