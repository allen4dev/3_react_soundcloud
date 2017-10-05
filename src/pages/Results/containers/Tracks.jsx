import React, { Component } from 'react';
import { shape, arrayOf, object, string, func } from 'prop-types';
import { connect } from 'react-redux';

import TrackRowList from './../../../modules/tracks/components/TrackRowList';

import search from './../../../modules/search';

import utils from './../../../helpers/utils';

class Tracks extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { items, query, searchTracks, location } = this.props;
    console.log('TRACKS LOCATION CDM', location);

    if (items.length === 0 || query !== utils.cleanSearch(location.search)) {
      console.log('FETCHING NEW RESULTS');
      console.log(
        `QUERY STORE: ${query}, SEARCH: ${utils.cleanSearch(location.search)}`
      );
      this.setState({ loading: true }, async () => {
        await searchTracks(query);
      });
    }

    this.setState({ loading: false });
  }

  componentWillReceiveProps(nextProps) {
    console.log('TRACKS LOCATION CWRP', nextProps.location);
    if (nextProps.location.search !== this.props.location.search) {
      console.log('should make a request?');
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>List loading...</h1>;
    }

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
  query: string.isRequired,
  items: arrayOf(object),
  searchTracks: func.isRequired,

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
