import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './styles/index.css';

import Home from './pages/Home';
import Results from './pages/Results';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Collection from './pages/Collection';
import UserDetail from './pages/UserDetail';
import PlaylistDetail from './pages/PlaylistDetail';
import TrackDetail from './pages/TrackDetail';
import Error404 from './pages/Error404';

// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

import Header from './shared/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/signup" component={Signup} />
          <Route path="/me" component={Profile} />
          <Route path="/collections" component={Collection} />
          <Route path="/user/:id" component={UserDetail} />
          <Route path="/playlist/:id" component={PlaylistDetail} />
          <Route path="/track/:id" component={TrackDetail} />
          <Route component={Error404} />
        </Switch>
        <footer className="App-footer">Footer</footer>
      </div>
    </Provider>
  );
}

// Will manage login and firebase latter
/* <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/results" component={Results} />
  <PublicRoute path="/signup" component={Signup} />
  <PrivateRoute path="/me" component={Profile} />
  <PrivateRoute path="/collections" component={Collection} />
  <Route path="/user/:id" component={UserDetail} />
  <Route path="/playlist/:id" component={PlaylistDetail} />
  <Route path="/track/:id" component={TrackDetail} />
  <Route component={Error404} />
</Switch>; */

export default App;
