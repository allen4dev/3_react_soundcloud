import React, { Component } from 'react';
import { shape, string } from 'prop-types';

import UserList from './../../../modules/users/components/UserList';

class Users extends Component {
  state = {
    dummie: 'yey',
  };

  componentDidMount() {
    console.log('USERS LOCATION CDM', this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    console.log('USERS LOCATION CWRP', nextProps.location);
    if (nextProps.location.search !== this.props.location.search) {
      console.log('should make a request?');
    }
  }

  render() {
    return (
      <section className="Users">
        <UserList items={new Array(12).fill({})} />
      </section>
    );
  }
}

Users.propTypes = {
  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

export default Users;
