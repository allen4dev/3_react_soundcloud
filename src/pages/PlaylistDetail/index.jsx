import React, { Component } from 'react';
import SC from './../../helpers/soundcloud';

import Set from './../../modules/playlists/components/Set';

import './index.css';

class PlaylistDetail extends Component {
  state = {
    dummie: 'yey',
  };

  componentDidMount() {
    SC.oEmbed('https://api.soundcloud.com/playlists/227731770', {
      element: document.getElementById('playlist-widget'),
    });
  }

  render() {
    return (
      <section className="PlaylistDetail">
        <div id="playlist-widget" />
      </section>
    );
  }
}

export default PlaylistDetail;
