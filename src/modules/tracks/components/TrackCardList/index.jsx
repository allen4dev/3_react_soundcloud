import React from 'react';
import { arrayOf, object } from 'prop-types';

import TrackCard from './../TrackCard';

import './index.css';

const TrackCardList = ({ items }) => (
  <div className="TrackCardList">{items.map(() => <TrackCard />)}</div>
);

TrackCardList.propTypes = {
  items: arrayOf(object).isRequired,
};

export default TrackCardList;
