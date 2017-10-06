import React, { Component } from 'react';

import Set from './../../modules/playlists/components/Set';
import User from './../../modules/users/components/User';
import TrackList from './../../modules/tracks/components/TrackList';

import ActionButtons from './../../shared/ActionButtons';

import './index.css';

class PlaylistDetail extends Component {
  state = {
    dummie: 'yey',
  };

  render() {
    return (
      <section className="PlaylistDetail">
        <Set />
        <div className="PlaylistDetail-content">
          <ActionButtons />
          <div className="PlaylistDetail-contentBody">
            <User />
            <TrackList items={new Array(12).fill({})} />
          </div>
        </div>
      </section>
    );
  }
}

export default PlaylistDetail;
