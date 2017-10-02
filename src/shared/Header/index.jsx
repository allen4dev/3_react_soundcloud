// @flow

import * as React from 'react';

import Logo from './../Logo';
// import Navigation from './../Navigation';
import Searchbar from './../Searchbar';

import './index.css';

const Header = () => (
  <header className="Header">
    <Logo src="asd" description="Amaterasu" />
    <Searchbar placeholder="Search..." />
    <div className="Header-buttons">
      <button className="btn btn-flat">Signin</button>
      <button className="btn">Create account</button>
    </div>
  </header>
);

export default Header;
