import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import users from './../../../modules/users';

import UserList from './../../../modules/users/components/UserList';

class Followings extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { currentUser, followings, fetchUserFollowings } = this.props;

    if (followings.length === 0) {
      this.setState({ loading: true });
      await fetchUserFollowings(currentUser);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { followings } = this.props;

    return (
      <div className="Followings">
        <UserList items={followings} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const currentUser = state.users.currentUser;

  const followingsIds = state.followings.ids[currentUser] || [];

  return {
    currentUser,

    followings: followingsIds.map(id => state.users.entities[id]),
  };
}

Followings.propTypes = {
  followings: arrayOf(object),
};

Followings.defaultProps = {
  followings: [],
};

export default connect(mapStateToProps, users.actions)(Followings);
