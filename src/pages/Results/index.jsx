import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Overview from './containers/Overview';
import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Users from './containers/Users';

import SearchMenu from './../../shared/SearchMenu';
import FilterBox from './../../shared/FilterBox';

import search from './../../modules/search';

import './index.css';

import utils from './../../helpers/utils';

class Results extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // console.log('LOCATION CDM', this.props.location);
    console.log('STORE QUERY', this.props.query);

    if (
      this.props.query.prev !== utils.cleanSearch(this.props.location.search)
    ) {
      this.setState({ loading: false });
      this.setState({ loading: true }, async () => {
        await this.fetchData(utils.cleanSearch(this.props.location.search));
      });
    }

    this.setState({ loading: false });
  }

  async componentWillReceiveProps(nextProps) {
    // console.log('LOCATION CWRP', nextProps.location);
    if (nextProps.location.search !== this.props.location.search) {
      console.log('should make a request?');
      this.setState({ loading: true });
      await this.fetchData(nextProps.location.search);
      this.setState({ loading: false });
    }
  }

  async fetchData(query) {
    const { searchTracks, searchPlaylists, searchUsers } = this.props;

    await Promise.all([
      searchTracks(utils.cleanSearch(query)),
      searchPlaylists(utils.cleanSearch(query)),
      searchUsers(utils.cleanSearch(query)),
    ]);
  }

  renderRoutes() {
    if (this.state.loading) {
      return <h1>Loading... </h1>;
    }

    return (
      <section className="Results-list">
        <Route path="/results/all" component={Overview} />
        <Route path="/results/tracks" component={Tracks} />
        <Route path="/results/playlists" component={Playlists} />
        <Route path="/results/users" component={Users} />
      </section>
    );
  }

  render() {
    const { location } = this.props;
    const query = utils.cleanSearch(location.search);
    return (
      <section className="Results container">
        <h1 className="Results-title">
          Resultados de busqueda para {`"${query}"`}
        </h1>

        <div className="Results-content">
          <div className="Results-aside">
            <SearchMenu search={this.props.location.search} />
            <FilterBox />
          </div>

          {this.renderRoutes()}
        </div>
      </section>
    );
  }
}

Results.propTypes = {
  query: shape({ current: string, prev: string }).isRequired,

  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps, search.actions)(Results);
