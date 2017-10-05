import React, { Component } from 'react';
import { shape, func } from 'prop-types';
import { withRouter } from 'react-router-dom';

import Logo from './../Logo';
import Searchbar from './../Searchbar';

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

    this.props.history.push({
      pathname: '/results/all',
      search: `q=${this.state.search}`,
    });

    this.setState({ search: '' });
  }

  handleChange(e) {
    const search = e.target.value;

    this.setState({ search });
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
  history: shape({
    push: func,
  }).isRequired,
};

export default withRouter(Header);
