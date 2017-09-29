// @flow
import React from 'react';

import './index.css';

const Image = (props: ImageType) => (
  <div className="Image">
    <img className="Image-photo" src={props.src} alt={props.description} />
  </div>
);

export default Image;
