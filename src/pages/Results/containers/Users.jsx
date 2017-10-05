import React, { Component } from 'react';
import { shape, string, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

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
        <UserList items={this.props.items} />
      </section>
    );
  }
}

Users.propTypes = {
  items: arrayOf(object),

  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

Users.defaultProps = {
  items: [],
};

function mapStateToProps(state) {
  const ids = state.search.users;

  return {
    items: ids.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps)(Users);
