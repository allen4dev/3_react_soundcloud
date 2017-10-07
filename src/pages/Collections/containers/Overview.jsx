import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';
import SetList from './../../../modules/playlists/components/SetList';
import UserList from './../../../modules/users/components/UserList';

import users from './../../../modules/users';

class Overview extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const {
      currentUser,
      tracks,
      playlists,
      followings,
      fetchFavoritedTracks,
      fetchUserPlaylists,
      fetchUserFollowings,
    } = this.props;

    if (
      tracks.length === 0 ||
      playlists.length === 0 ||
      followings.length === 0
    ) {
      this.setState({ loading: false });
      await Promise.all([
        fetchFavoritedTracks(currentUser),
        fetchUserPlaylists(currentUser),
        fetchUserFollowings(currentUser),
      ]);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { tracks, playlists, followings } = this.props;

    return (
      <section className="Overview">
        <section className="Overview-tracks">
          <h3 className="Overview-title">Escuchadas recientemente</h3>
          <TrackCardList items={tracks} />
        </section>

        <section className="Overview-tracks">
          <h3 className="Overview-title">Listas</h3>
          <SetList items={playlists} />
        </section>

        <section className="Overview-tracks">
          <h3 className="Overview-title">Me gusta</h3>
          <TrackCardList items={tracks} />
        </section>

        <section className="Overview-tracks">
          <h3 className="Overview-title">Siguiendo</h3>
          <UserList items={followings} />
        </section>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const currentUser = state.users.currentUser;

  const trackIds = state.users.favorited[currentUser] || [];
  const playlistIds = state.users.playlists[currentUser] || [];
  const userIds = state.followings.ids[currentUser] || [];

  return {
    currentUser,
    tracks: trackIds.map(id => state.tracks.entities[id]),
    playlists: playlistIds.map(id => state.playlists.entities[id]),
    followings: userIds.map(id => state.users.entities[id]),
  };
}

Overview.propTypes = {
  tracks: arrayOf(object),
  playlists: arrayOf(object),
  followings: arrayOf(object),
};

Overview.defaultProps = {
  tracks: [],
  playlists: [],
  followings: [],
};

export default connect(mapStateToProps, users.actions)(Overview);
