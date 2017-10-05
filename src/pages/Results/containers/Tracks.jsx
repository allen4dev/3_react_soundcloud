import React, { Component } from 'react';
import { string, shape, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';

import TrackRowList from './../../../modules/tracks/components/TrackRowList';

import search from './../../../modules/search';

// import utils from './../../../helpers/utils';

class Tracks extends Component {
  state = {
    // loading: true,
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
    const { items } = this.props;
    /* <TrackRowList items={new Array(12).fill({})} /> */

    return (
      <section className="Tracks">
        <TrackRowList items={items} />
      </section>
    );
  }
}

Tracks.propTypes = {
  items: arrayOf(object),

  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

Tracks.defaultProps = {
  items: [],
};

function mapStateToProps(state) {
  const ids = state.search.tracks;

  return {
    query: state.search.query,
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, search.actions)(Tracks);
