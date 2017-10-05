import React from 'react';
import { string, func } from 'prop-types';

import './index.css';

const Searchbar = ({ placeholder, value, handleSubmit, handleChange }) =>
  <form onSubmit={handleSubmit} className="Searchbar">
    <input
      className="Searchbar-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  </form>;

Searchbar.propTypes = {
  placeholder: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  handleSubmit: func.isRequired,
};

export default Searchbar;
