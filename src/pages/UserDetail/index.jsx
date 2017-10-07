import React, { Component } from 'react';

// import Image from './../../shared/Image';

import './index.css';

// import defaultImage from './../../modules/images/default_image.png';

class UserDetail extends Component {
  state = {
    dummie: 'yay',
  };

  render() {
    return (
      <section className="UserDetail">
        <div className="UserDetail-header">
          <div className="UserDetail-image">user</div>
        </div>
      </section>
    );
  }
}

export default UserDetail;
