import React from 'react';

import './index.css';

const ActionButtons = () => (
  <div className="ActionButtons">
    <button className="ActionButtons-button btn btn-icon">
      <i className="ActionButtons-icon icon-heart-o" /> Me gusta
    </button>
    <button className="ActionButtons-button btn btn-icon">
      <i className="ActionButtons-icon icon-share" /> Compartir
    </button>
    <button className="ActionButtons-button btn btn-icon">
      <i className="ActionButtons-icon icon-list-alt" /> Repostear
    </button>
    <button className="ActionButtons-button btn btn-icon">
      <i className="ActionButtons-icon icon-cross" /> Mas...
    </button>
  </div>
);

export default ActionButtons;
