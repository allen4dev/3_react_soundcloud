import React from 'react';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';

import './index.css';

const Track = () => {
  const src = defaultImage;
  return (
    <section className="Track">
      <div className="Track-description">
        <div className="Track-image">
          <Image src={src} description="hey" />
        </div>
        <div className="Track-title">
          <span className="Track-playlist">fripSide</span> -{' '}
          <span className="Track-title">Way to answer</span>
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
export default Track;
