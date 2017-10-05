import React, { Component } from 'react';
import { shape, string } from 'prop-types';

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
        <h1 className="Users-title">This is the Users page</h1>
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
