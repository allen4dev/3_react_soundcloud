import React from 'react';

import UserCard from './../UserCard';

import './index.css';

const User = () => (
  <div className="User">
    <UserCard />
    <div className="User-info">
      <div className="User-count">
        <span className="User-followers">
          <i className="icon-users" /> 123
        </span>
        <span className="User-tracks">
          <i className="icon-music" /> 25
        </span>
      </div>
      <button className="btn">Seguir</button>
    </div>
  </div>
);

export default User;
