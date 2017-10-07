import React, { Component } from 'react';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';
import SetList from './../../../modules/playlists/components/SetList';
import UserList from './../../../modules/users/components/UserList';

class Overview extends Component {
  state = {
    dummie: 'yay',
  };

  render() {
    return (
      <section className="Overview">
        <section className="Overview-tracks">
          <h3 className="Overview-title">Escuchadas recientemente</h3>
          <TrackCardList items={new Array(6).fill({ user: {} })} />
        </section>

        <section className="Overview-tracks">
          <h3 className="Overview-title">Me gusta</h3>
          <TrackCardList items={new Array(6).fill({ user: {} })} />
        </section>

        <section className="Overview-tracks">
          <h3 className="Overview-title">Listas</h3>
          <SetList items={new Array(6).fill({ user: {} })} />
        </section>

        <section className="Overview-tracks">
          <h3 className="Overview-title">Siguiendo</h3>
          <UserList items={new Array(6).fill({})} />
        </section>
      </section>
    );
  }
}

export default Overview;
