import React, { Component } from 'react';

import UserList from './../../../modules/users/components/UserList';

class Followings extends Component {
  state = {
    dummie: 'yay',
  };

  render() {
    return (
      <div className="Followings">
        <UserList items={new Array(12).fill({})} />
      </div>
    );
  }
}

export default Followings;
