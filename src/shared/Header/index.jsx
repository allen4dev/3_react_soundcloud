// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../Logo';
import Searchbar from './../Searchbar';

import './index.css';

const Header = () => (
  <header className="Header">
    <Logo src="asd" description="Amaterasu" />
    <div className="Header-explore">
      <Link className="Header-link" to="/results">
        Explore
      </Link>
    </div>
    <Searchbar placeholder="Search..." />
    <div className="Header-login">
      <Link className="Header-link " to="/login">
        Login
      </Link>
    </div>
  </header>
);

export default Header;
