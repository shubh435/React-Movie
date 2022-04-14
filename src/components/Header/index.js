import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Content, Wrapper, LogoImg } from "./Header.styles";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb" />
        </Link>

        <LogoImg src={TMDBLogo} alt="tmdb" />
      </Content>
    </Wrapper>
  );
};

export default Header;
