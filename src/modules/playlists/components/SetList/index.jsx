import React from 'react';
import { arrayOf, object } from 'prop-types';

import SetCard from './../SetCard';

import './index.css';

const SetList = ({ items }) =>
  <section className="SetList">
    {items.map(list => <SetCard key={list.id} {...list} />)}
  </section>;

SetList.propTypes = {
  items: arrayOf(object).isRequired,
};

export default SetList;
