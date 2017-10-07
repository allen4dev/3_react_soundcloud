import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';

import users from './../../../modules/users';

class Liked extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { currentUser, tracks, fetchFavoritedTracks } = this.props;

    if (tracks.length === 0) {
      this.setState({ loading: false });

      await fetchFavoritedTracks(currentUser);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading</h1>;
    }

    const { tracks } = this.props;

    return (
      <div className="Liked">
        <TrackCardList items={tracks} />
      </div>
    );
  }
}

Liked.propTypes = {
  tracks: arrayOf(object),
};

Liked.defaultProps = {
  tracks: [],
};

function mapStateToProps(state) {
  const currentUser = state.users.currentUser;
  const trackIds = state.users.favorited[currentUser] || [];

  return {
    currentUser,
    tracks: trackIds.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, users.actions)(Liked);
