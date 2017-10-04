import React, { Component } from 'react';
import { func, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import TrackCardList from './../../modules/tracks/components/TrackCardList/';

import Hero from './../../shared/Hero';

import tracks from './../../modules/tracks';

import './index.css';

class Home extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { lastTracks, fetchTracksByDate } = this.props;

    if (lastTracks.length === 0) {
      this.setState({ loading: true });
      await fetchTracksByDate('last_week');
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { lastTracks } = this.props;
    return (
      <section className="Home">
        <Hero />
        <div className="Home-tracks">
          <p className="Home-text">
            Escucha la musica del momento gratis en la comunidad SoundCloud
          </p>
          <TrackCardList items={lastTracks} />
        </div>

        <button className="Home-button btn">Explore</button>
      </section>
    );
  }
}

Home.propTypes = {
  lastTracks: arrayOf(object),
  fetchTracksByDate: func.isRequired,
};

Home.defaultProps = {
  lastTracks: [],
};

function mapStateToProps(state) {
  const ids = state.tracks.lastTracks;
  const lastTracks = ids.map(id => state.tracks.entities[id]);

  return {
    lastTracks,
  };
}

export default connect(mapStateToProps, tracks.actions)(Home);
