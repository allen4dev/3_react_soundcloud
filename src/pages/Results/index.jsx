import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { Route } from 'react-router-dom';

import Overview from './containers/Overview';
import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Users from './containers/Users';

import SearchMenu from './../../shared/SearchMenu';
import FilterBox from './../../shared/FilterBox';

import './index.css';

import utils from './../../helpers/utils';

class Results extends Component {
  state = {
    dummie: 'hey',
  };

  // componentDidMount() {
  //   console.log('LOCATION CDM', this.props.location);
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('LOCATION CWRP', nextProps.location);
  //   if (nextProps.location.search !== this.props.location.search) {
  //     console.log('should make a request?');
  //   }
  // }
  render() {
    const { location } = this.props;
    const search = utils.cleanSearch(location.search);
    return (
      <section className="Results container">
        <h1 className="Results-title">
          Resultados de busqueda para {`"${search}"`}
        </h1>

        <div className="Results-content">
          <div className="Results-aside">
            <SearchMenu search={this.props.location.search} />
            <FilterBox />
          </div>

          <section className="Results-list">
            <Route path="/results/all" component={Overview} />
            <Route path="/results/tracks" component={Tracks} />
            <Route path="/results/playlists" component={Playlists} />
            <Route path="/results/users" component={Users} />
          </section>
        </div>
      </section>
    );
  }
}

Results.propTypes = {
  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

export default Results;
