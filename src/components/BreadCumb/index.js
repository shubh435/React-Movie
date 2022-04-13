import React from "react";
import { Link } from "react-router-dom";
import { Content, Wrapper } from "./BreadCumb.styles";

const BreadCumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>

        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

export default BreadCumb;