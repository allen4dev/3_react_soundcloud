import React, { Component } from 'react';
import { number } from 'prop-types';

class UserCardSC extends Component {
  state = {
    dummie: 'yay',
  };

  render() {
    return (
      <div id={`track-${this.props.id}`}>
        <span>Can this be used as a placeholder?</span>
      </div>
    );
  }
}

UserCardSC.propTypes = {
  id: number.isRequired,
};

export default UserCardSC;
