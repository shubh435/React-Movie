import React, { useState } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from "../../images/search-icon.svg";
const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("" );
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search Movie" />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
