import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './styles/index.css';

import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';

import Header from './shared/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
        <footer className="App-footer">Footer</footer>
      </div>
    </Provider>
  );
}

export default App;
