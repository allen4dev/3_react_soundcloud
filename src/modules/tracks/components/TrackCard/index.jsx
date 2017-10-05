import React from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import './index.css';

import defaultImage from './../../../images/default_image.png';

const TrackCard = props => {
  const src = props.artwork_url || defaultImage;
  return (
    <div className="TrackCard">
      <Link className="TrackCard-link" to={`/track/${props.id}`}>
        <Image src={src} description={props.description} />
      </Link>
      <div className="TrackCard-description">
        <Link to={`/track/${props.id}`} className="TrackCard-title truncate">
          {props.title}
        </Link>
        <Link to={`/user/${props.user.id}`} className="TrackCard-user">
          {props.user.username}
        </Link>
      </div>
    </div>
  );
};

TrackCard.propTypes = {
  id: number.isRequired,
  artwork_url: string,
  title: string.isRequired,
  description: string,
  user: shape({
    id: number,
    username: string,
  }).isRequired,
};

TrackCard.defaultProps = {
  description: '',
  artwork_url: null,
};

export default TrackCard;
