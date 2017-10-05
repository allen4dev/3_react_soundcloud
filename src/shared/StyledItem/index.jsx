import React from 'react';
import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

import './index.css';

const StyledItem = ({ pathname, search, icon, children }) =>
  <NavLink
    className="StyledItem"
    to={{
      pathname,
      search,
    }}
    activeClassName="StyledItem-selected">
    <i className={`StyledItem-icon icon-${icon}`} /> {children}
  </NavLink>;

StyledItem.propTypes = {
  pathname: string.isRequired,
  search: string.isRequired,
  icon: string.isRequired,
  children: string.isRequired,
};

export default StyledItem;
