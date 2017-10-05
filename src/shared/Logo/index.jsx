import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Logo = () =>
  <Link to="/" className="Logo">
    <i className="Logo-font icon-soundcloud" />
  </Link>;

export default Logo;
