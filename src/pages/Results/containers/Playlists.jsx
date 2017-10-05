import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape, string, arrayOf, object } from 'prop-types';

import SetList from './../../../modules/playlists/components/SetList';

class Playlists extends Component {
  state = {
    dummie: 'yey',
  };

  componentDidMount() {
    console.log('PLAYLISTS LOCATION CDM', this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    console.log('PLAYLISTS LOCATION CWRP', nextProps.location);
    if (nextProps.location.search !== this.props.location.search) {
      console.log('should make a request?');
    }
  }

  render() {
    return (
      <section className="Playlists">
        <SetList items={this.props.items} />
      </section>
    );
  }
}

Playlists.propTypes = {
  items: arrayOf(object),

  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

Playlists.defaultProps = {
  items: [],
};

function mapStateToProps(state) {
  const ids = state.search.playlists;
  return {
    items: ids.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps)(Playlists);
