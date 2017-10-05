import React from 'react';
import { string } from 'prop-types';
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
        <span className="SetCard-count">42 pistas</span>
      </Link>
      <div className="SetCard-description">
        <Link className="SetCard-link SetCard-title" to="/playlist/123">
          Monochrome Rainbow
        </Link>
        <Link className="SetCard-link SetCard-username" to="/user/123">
          allen4dev
        </Link>
      </div>
    </section>
  );
};
SetCard.propTypes = {
  artwork_url: string.isRequired,
  title: string.isRequired,
  // user: shape({
  //   id: number,
  //   username: string
  // }).isRequired
};

export default SetCard;
