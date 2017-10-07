import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import users from './../../../modules/users';

import SetList from './../../../modules/playlists/components/SetList';

class Playlists extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { currentUser, playlists, fetchUserPlaylists } = this.props;

    if (playlists.length === 0) {
      this.setState({ loading: true });
      await fetchUserPlaylists(currentUser);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { playlists } = this.props;

    return (
      <div className="Playlists">
        <SetList items={playlists} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const currentUser = state.users.currentUser;

  const playlistIds = state.users.playlists[currentUser] || [];

  return {
    currentUser,

    playlists: playlistIds.map(id => state.playlists.entities[id]),
  };
}

Playlists.propTypes = {
  playlists: arrayOf(object),
};

Playlists.defaultProps = {
  playlists: [],
};

export default connect(mapStateToProps, users.actions)(Playlists);
