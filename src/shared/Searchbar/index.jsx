// @flow
import * as React from 'react';

import './index.css';

type Props = {
  placeholder: string,
};

const Searchbar = (props: Props) => (
  <form className="Searchbar">
    <input
      className="Searchbar-input"
      type="text"
      placeholder={props.placeholder}
    />
  </form>
);

export default Searchbar;
