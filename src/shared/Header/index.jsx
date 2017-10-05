import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Logo from './../Logo';
import Searchbar from './../Searchbar';

import search from './../../modules/search';

import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      search: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const query = this.state.search;
    //
    this.props.history.push({
      pathname: '/results/all',
      search: `q=${query}`,
    });

    this.props.setQuery(query);
    this.setState({ search: '' });
  }

  handleChange(e) {
    const query = e.target.value;

    this.setState({ search: query });
  }

  render() {
    return (
      <header className="Header">
        <Logo description="SoundCloud" />
        <Searchbar
          placeholder="Search..."
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="Header-buttons">
          <button className="btn btn-flat">Signin</button>
          <button className="btn">Create account</button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  setQuery: func.isRequired,

  history: shape({
    push: func,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default withRouter(connect(mapStateToProps, search.actions)(Header));
