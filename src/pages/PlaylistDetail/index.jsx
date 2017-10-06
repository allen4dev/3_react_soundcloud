import React, { Component } from 'react';
import { arrayOf, object, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import Set from './../../modules/playlists/components/Set';
import User from './../../modules/users/components/User';
import TrackList from './../../modules/tracks/components/TrackList';

import ActionButtons from './../../shared/ActionButtons';

import playlists from './../../modules/playlists';

import './index.css';

class PlaylistDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { playlist, fetchPlaylist, match } = this.props;

    if (!playlist) {
      this.setState({ loading: true });
      await fetchPlaylist(match.params.id);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { playlist, tracks } = this.props;

    return (
      <section className="PlaylistDetail">
        <Set
          user={playlist.user}
          playlist={playlist}
          playlistCount={tracks.length}
        />
        <div className="PlaylistDetail-content">
          <ActionButtons />
          <div className="PlaylistDetail-contentBody">
            <User user={playlist.user} />
            <TrackList items={tracks} />
          </div>
        </div>
      </section>
    );
  }
}

PlaylistDetail.propTypes = {
  tracks: arrayOf(object),
  playlist: shape({
    user: object,
  }).isRequired,

  fetchPlaylist: func.isRequired,

  match: shape({
    params: shape({
      id: string,
    }),
  }).isRequired,
};

PlaylistDetail.defaultProps = {
  playlist: null,
  tracks: [],
};

function mapStateToProps(state, { match }) {
  const ids = state.playlists.tracks[match.params.id] || [];

  return {
    playlist: state.playlists.entities[match.params.id],
    tracks: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, playlists.actions)(PlaylistDetail);
