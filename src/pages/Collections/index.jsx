import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Overview from './containers/Overview';
import Liked from './containers/Liked';
import Playlists from './containers/Playlists';
import Followings from './containers/Followings';
import History from './containers/History';

import './index.css';

const Collections = () => (
  <section className="Collections">
    <ul className="Collections-menu">
      <li className="Collections-item">
        <NavLink
          to="/collections/overview"
          activeClassName="Collections-link-active"
          className="Collections-link">
          Resumen
        </NavLink>
      </li>
      <li className="Collections-item">
        <NavLink
          to="/collections/liked"
          activeClassName="Collections-link-active"
          className="Collections-link">
          Me gusta
        </NavLink>
      </li>
      <li className="Collections-item">
        <NavLink
          to="/collections/playlists"
          activeClassName="Collections-link-active"
          className="Collections-link">
          Listas
        </NavLink>
      </li>
      <li className="Collections-item">
        <NavLink
          to="/collections/followings"
          activeClassName="Collections-link-active"
          className="Collections-link">
          Siguiendo
        </NavLink>
      </li>
      <li className="Collections-item">
        <NavLink
          to="/collections/history"
          activeClassName="Collections-link-active"
          className="Collections-link">
          Historial
        </NavLink>
      </li>
    </ul>

    <div className="Collections-content">
      <Route exact path="/collections/overview" component={Overview} />
      <Route path="/collections/liked" component={Liked} />
      <Route path="/collections/playlists" component={Playlists} />
      <Route path="/collections/followings" component={Followings} />
      <Route path="/collections/history" component={History} />
    </div>
  </section>
);

export default Collections;
