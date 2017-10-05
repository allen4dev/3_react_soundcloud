import React, { Component } from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';

import Image from './../../../../shared/Image';

import defaultImage from './../../../images/default_image.png';

import './index.css';

class TrackRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: '0%',
    };
  }

  render() {
    const src = this.props.artwork_url || defaultImage;

    return (
      <div className="TrackRow">
        <div className="TrackRow-image">
          <Image src={src} description={this.props.title} />
        </div>
        <div className="TrackRow-player">
          <div className="TrackRow-heading">
            <div className="TrackRow-button">
              <button className="TrackRow-play btn">
                <i className="icon-play3" />
              </button>
            </div>
            <div className="TrackRow-description">
              <Link
                to={`/user/${this.props.user.id}`}
                className="TrackRow-link TrackRow-user">
                {this.props.user.username}
              </Link>
              <Link
                to={`/track/${this.props.id}`}
                className="TrackRow-link TrackRow-title">
                {this.props.title}
              </Link>
            </div>
          </div>
          <div className="TrackRow-progress">
            <div
              className="TrackRow-progressFilled"
              style={{ flexBasis: this.state.percent }}
            />
          </div>
          <div className="TrackRow-footer">
            <button className="TrackRow-count btn btn-flat">
              <i className="TrackRow-icon icon-music" />
              {this.props.playback_count}
            </button>
            <button className="TrackRow-count btn btn-flat">
              <i className="TrackRow-icon icon-heart-o" />
              {this.props.favoritings_count}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TrackRow.propTypes = {
  id: number.isRequired,
  user: shape({
    id: number.isRequired,
    username: string.isRequired,
  }).isRequired,
  title: string.isRequired,
  artwork_url: string.isRequired,
  playback_count: number,
  favoritings_count: number,
};

TrackRow.defaultProps = {
  playback_count: 0,
  favoritings_count: 0,
};

export default TrackRow;
