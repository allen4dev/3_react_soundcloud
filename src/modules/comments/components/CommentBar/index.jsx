import React from 'react';
import { string, func } from 'prop-types';

import Image from './../../../../shared/Image';
import ActionButtons from './../../../../shared/ActionButtons';

import defaultImage from './../../../images/default_image.png';

import './index.css';

const CommentBar = ({
  avatarUrl,
  placeholder,
  value,
  handleChange,
  handleSubmit,
}) => {
  const src = avatarUrl || defaultImage;

  return (
    <div className="CommentBar">
      <div className="CommentBar-heading">
        <div className="CommentBar-avatar">
          <Image src={src} description="user information" />
        </div>
        <form className="CommentBar-form" onSubmit={handleSubmit}>
          <input
            className="CommentBar-input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
      <ActionButtons />
    </div>
  );
};

CommentBar.propTypes = {
  avatarUrl: string.isRequired,
  placeholder: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  handleSubmit: func.isRequired,
};

export default CommentBar;
