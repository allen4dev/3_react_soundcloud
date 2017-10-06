import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';
import './index.css';

const UserCard = props => {
  const src = props.avatar_url || defaultImage;

  return (
    <div className="UserCard">
      <Link className="UserCard-link" to="/user/123">
        <div className="UserCard-image">
          <Image src={src} description={props.username} />
        </div>

        <div className="UserCard-description">
          <span className="UserCard-username">{props.username}</span>
        </div>
      </Link>
    </div>
  );
};

UserCard.propTypes = {
  avatar_url: string.isRequired,
  username: string,
};

UserCard.defaultProps = {
  username: 'user',
};

export default UserCard;
