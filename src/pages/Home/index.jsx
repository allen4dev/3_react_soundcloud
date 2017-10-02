// @flow

import * as React from 'react';

import Hero from './../../shared/Hero';

import './index.css';

type State = {
  dummie: string,
};

class Home extends React.Component<{}, State> {
  state = {
    dummie: '',
  };

  render() {
    return (
      <section className="Home">
        <Hero />
      </section>
    );
  }
}

export default Home;
