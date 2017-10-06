import React from 'react';
import { string } from 'prop-types';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';

import './index.css';

const Track = props => {
  const src = props.artwork_url || defaultImage;
  return (
    <section className="Track">
      <div className="Track-description">
        <div className="Track-image">
          <Image src={src} description="hey" />
        </div>
        <div className="Track-title">
          <span className="Track-playlist">fripSide</span> -{' '}
          <span className="Track-title truncate">{props.title}</span>
        </div>
      </div>
      <div className="Track-actions">
        <button className="Track-button btn btn-icon">
          <i className="icon-play3" />
        </button>
        <span className="Track-playCount">1.409</span>
      </div>
    </section>
  );
};

Track.propTypes = {
  artwork_url: string.isRequired,
  title: string.isRequired,
};

export default Track;
