import React from 'react';
import { arrayOf, object } from 'prop-types';

import UserCard from './../UserCard';

import './index.css';

const UserList = ({ items }) =>
  <section className="UserList">
    {items.map(user => <UserCard key={user.id} {...user} />)}
  </section>;

UserList.propTypes = {
  items: arrayOf(object).isRequired,
};

export default UserList;
