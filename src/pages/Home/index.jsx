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

        <button className="Home-button btn">Explora</button>

        <div className="Home-explore">
          <div className="Home-apps">
            <div className="Home-appsDescription">
              <h2 className="Home-appsTitle">Llevate la musica contigo</h2>
              <p className="Home-appsText">
                Soundcloud esta disponible en Web, Mobile, Sonos, Google
                Chromecast y Microsoft Xbox One.
              </p>
            </div>
          </div>
          <div className="Home-info">
            <div className="Home-infoContainer">
              <h3 className="Home-infoTitle">LLamada a todos los creadores</h3>
              <p className="Home-infoText">
                Hazte con soundcloud para estar en contacto con todos tus
                seguidores, compartir tus canciones y aumentar tu publico. ¿A
                que esperas?
              </p>
              <button className="btn btn-flat">Mas informacion</button>
            </div>
          </div>
        </div>
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
