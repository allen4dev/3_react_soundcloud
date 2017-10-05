import React from 'react';
import { string } from 'prop-types';

import StyledItem from './../StyledItem';

const SearchMenu = ({ search }) =>
  <ul className="SearchMenu">
    <StyledItem pathname="/results/all" icon="search" search={search}>
      Todo
    </StyledItem>

    <StyledItem pathname="/results/tracks" icon="music" search={search}>
      Pistas
    </StyledItem>

    <StyledItem pathname="/results/playlists" icon="list-alt" search={search}>
      Listas
    </StyledItem>
    <StyledItem pathname="/results/users" icon="users" search={search}>
      Gente
    </StyledItem>
  </ul>;

SearchMenu.propTypes = {
  search: string.isRequired,
};

export default SearchMenu;
