import React from 'react';
import { string } from 'prop-types';

import './index.css';

const Image = ({ src, description }) => (
  <div className="Image">
    <img className="Image-photo" src={src} alt={description} />
  </div>
);

Image.propTypes = {
  src: string.isRequired,
  description: string.isRequired,
};

export default Image;
