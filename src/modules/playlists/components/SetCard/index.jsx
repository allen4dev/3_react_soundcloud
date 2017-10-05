import React from 'react';
import { string, number, shape, arrayOf, object } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';

import './index.css';

const SetCard = props => {
  const src = props.artwork_url || defaultImage;
  return (
    <section className="SetCard">
      <Link to="/playlist/123" className="SetCard-image SetCard-link">
        <Image src={src} description={props.title} />
        <span className="SetCard-count">
          {props.tracks.length} pistas
        </span>
      </Link>
      <div className="SetCard-description">
        <Link
          className="SetCard-link SetCard-title truncate"
          to={`/playlist/${props.id}`}>
          {props.title}
        </Link>
        <Link
          className="SetCard-link SetCard-username"
          to={`/user/${props.user.id}`}>
          {props.user.username}
        </Link>
      </div>
    </section>
  );
};
SetCard.propTypes = {
  id: number.isRequired,
  artwork_url: string.isRequired,
  title: string.isRequired,
  user: shape({
    id: number,
    username: string,
  }).isRequired,
  tracks: arrayOf(object),
};

SetCard.defaultProps = {
  tracks: [],
};

export default SetCard;
