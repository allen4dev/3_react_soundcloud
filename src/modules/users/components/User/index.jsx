import React from 'react';
import { shape, string, number } from 'prop-types';

import UserCard from './../UserCard';

import './index.css';

const User = ({ user, stats }) => (
  <div className="User">
    <UserCard {...user} />
    <div className="User-info">
      <div className="User-count">
        <span className="User-followers">
          <i className="icon-users" /> {stats.favoritingsCount}
        </span>
        <span className="User-tracks">
          <i className="icon-music" /> {stats.playbackCount}
        </span>
      </div>
      <button className="btn">Seguir</button>
    </div>
  </div>
);

User.propTypes = {
  user: shape({
    avatar_url: string,
    username: string,
  }).isRequired,
  stats: shape({
    playbackCount: number,
    favoritingsCount: number,
  }),
};

User.defaultProps = {
  stats: {
    playbackCount: 0,
    favoritingsCount: 0,
  },
};

export default User;
