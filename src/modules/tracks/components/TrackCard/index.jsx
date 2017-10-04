import React from 'react';

import Image from './../../../../shared/Image';

import './index.css';

import src from './images/track_card.png';

const TrackCard = () => (
  <div className="TrackCard">
    <Image src={src} description="A random image for a track" />
    <div className="TrackCard-description">
      <span className="TrackCard-title">A random track name</span>
      <span className="TrackCard-artist">random artist</span>
    </div>
  </div>
);

export default TrackCard;
