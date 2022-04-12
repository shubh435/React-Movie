import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Content, Wrapper, LogoImg, TMDBLogoImg } from "./Header.styles";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={RMDBLogo} alt="rmdb" />
        <LogoImg src={TMDBLogo} alt="tmdb" />
      </Content>
    </Wrapper>
  );
};

export default Header;
