// @flow

import React from 'react';

import './index.css';

const Logo = (props: ImageType) => (
  <div className="Logo">
    <img className="Logo-image" src={props.src} alt={props.description} />
  </div>
);

export default Logo;
