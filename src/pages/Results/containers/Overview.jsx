import React, { Component } from 'react';
import { shape, string } from 'prop-types';

class Overview extends Component {
  state = {
    dummie: 'yey',
  };

  componentDidMount() {
    console.log('OVERVIEW LOCATION CDM', this.props.location);
  }

  componentWillReceiveProps(nextProps) {
    console.log('OVERVIEW LOCATION CWRP', nextProps.location);
    if (nextProps.location.search !== this.props.location.search) {
      // just need to do this in Overview because if we have
      // a current search and make another search Overview CWRP
      // will be called, in the others is allways CDM
      // and dont need to do nothing in CWRP since when a new
      // search comes go automatically to Overview again
      console.log('should make a request?');
    }
  }

  render() {
    return (
      <section className="Overview">
        <p className="Overview-message">
          Se encontraron 500 pistas, 196 listas y 18 personas
        </p>
      </section>
    );
  }
}

Overview.propTypes = {
  location: shape({
    pathname: string,
    search: string,
  }).isRequired,
};

export default Overview;
