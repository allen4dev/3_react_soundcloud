import React from 'react';
import { arrayOf, object } from 'prop-types';

import TrackRow from './../TrackRow';

import './index.css';

const TrackRowList = ({ items }) => (
  <div className="TrackRowList">
    {items.map(track => <TrackRow key={track.id} {...track} />)}
  </div>
);

TrackRowList.propTypes = {
  items: arrayOf(object).isRequired,
};

export default TrackRowList;
