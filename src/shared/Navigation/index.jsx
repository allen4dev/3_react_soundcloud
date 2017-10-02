import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navigation = () => (
  <nav className="Navigation">
    <Link to="/" className="Navigation-link">
      Home
    </Link>
    <Link to="/collection" className="Navigation-link">
      Collection
    </Link>
  </nav>
);

export default Navigation;
