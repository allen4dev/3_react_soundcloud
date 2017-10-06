import React from 'react';
import { arrayOf, object } from 'prop-types';

import Track from './../Track';

import './index.css';

const TrackList = ({ items }) =>
  <section className="TrackList">
    {items.map(track => <Track key={track.id} {...track} />)}
  </section>;

TrackList.propTypes = {
  items: arrayOf(object).isRequired,
};

export default TrackList;
