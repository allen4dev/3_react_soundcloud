import React, { Component } from 'react';
import { shape, string } from 'prop-types';

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
        <SetList items={new Array(12).fill({})} />
      </section>
    );
  }
}

Playlists.propTypes = {
  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

export default Playlists;
