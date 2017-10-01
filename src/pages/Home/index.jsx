// @flow

import * as React from 'react';

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
        <h1 className="Home-title">You are in Home</h1>
      </section>
    );
  }
}

export default Home;
