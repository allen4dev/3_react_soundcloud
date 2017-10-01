// @flow

import * as React from 'react';

import './index.css';

import SC from './../../helpers/soundcloud';

type State = {
  dummie: string,
};

class Home extends React.Component<{}, State> {
  state = {
    dummie: '',
  };

  componentDidMount() {
    SC.get('/tracks/101329593').then(track => {
      console.log('TRACK', track);
    });
  }

  render() {
    return (
      <section className="Home">
        <h1 className="Home-title">You are in Home</h1>
      </section>
    );
  }
}

export default Home;
