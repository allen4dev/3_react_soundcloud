import React, { Component } from 'react';

import TrackCardList from './../../modules/tracks/components/TrackCardList/';

import Hero from './../../shared/Hero';

import './index.css';

class Home extends Component {
  state = {
    dummie: '',
  };

  render() {
    return (
      <section className="Home">
        <Hero />
        <div className="Home-tracks">
          <p className="Home-text">
            Escucha la musica del momento gratis en la comunidad SoundCloud
          </p>
          <TrackCardList items={new Array(12).fill({})} />
        </div>

        <button className="Home-button btn">Explore</button>
      </section>
    );
  }
}

export default Home;
