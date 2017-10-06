import React from 'react';
import { shape, number, string } from 'prop-types';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';

import './index.css';

const Set = ({ user, playlist, playlistCount }) => {
  const src =
    playlist.tracks[0].artwork_url.replace('-large', '-crop') || defaultImage;

  return (
    <div className="Set">
      <div className="Set-info">
        <div className="Set-heading">
          <button className="Set-button btn btn-play">
            <i className="icon-play3" />
          </button>
          <div className="Set-description">
            <span className="Set-username emphasize">
              {user.username}
            </span>
            <span className="Set-title emphasize">
              {playlist.title}
            </span>
          </div>
        </div>

        <div className="Set-count">
          <span className="Set-tracksCount">
            {playlistCount}
          </span>
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

Set.propTypes = {
  playlist: shape({
    artwork_url: string,
    title: string,
  }).isRequired,
  user: shape({
    username: string,
  }).isRequired,

  playlistCount: number,
};

Set.defaultProps = {
  playlistCount: 0,
};

export default Set;
