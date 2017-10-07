import React, { Component } from 'react';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';

class Liked extends Component {
  state = {
    dummie: 'yay',
  };

  render() {
    return (
      <div className="Liked">
        <TrackCardList items={new Array(24).fill({ user: {} })} />
      </div>
    );
  }
}

export default Liked;
