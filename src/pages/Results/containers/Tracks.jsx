import React, { Component } from 'react';
import { shape, string } from 'prop-types';

class Tracks extends Component {
  state = {
    dummie: 'yey',
  };

  componentDidMount() {
    console.log('TRACKS LOCATION CDM', this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    console.log('TRACKS LOCATION CWRP', nextProps.location);
    if (nextProps.location.search !== this.props.location.search) {
      console.log('should make a request?');
    }
  }

  render() {
    return (
      <section className="Tracks">
        <h1 className="Tracks-title">This is the Tracks page</h1>
      </section>
    );
  }
}

Tracks.propTypes = {
  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

export default Tracks;
