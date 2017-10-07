import React, { Component } from 'react';

import SetList from './../../../modules/playlists/components/SetList';

class Playlists extends Component {
  state = {
    dummie: 'yay',
  };

  render() {
    return (
      <div className="Playlists">
        <SetList items={new Array(8).fill({ user: {} })} />
      </div>
    );
  }
}

export default Playlists;
