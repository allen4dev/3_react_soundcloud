import React from 'react';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';
import './index.css';

const Set = () => {
  const src = defaultImage;

  return (
    <div className="Set">
      <div className="Set-info">
        <div className="Set-heading">
          <button className="Set-play btn">
            <i className="icon-play3" />
          </button>
        </div>

        <div className="Set-count">
          <span className="Set-tracksCount">72</span>
          <span className="Set-text">pistas</span>
          <span className="Set-totalTime">6:00:46</span>
        </div>
      </div>
      <div className="Set-image">
        <Image src={src} description="artwork_url" />
      </div>
    </div>
  );
};

export default Set;