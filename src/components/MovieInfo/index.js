import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Thumb from "../Thumb";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
const MovieInfo = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb  image={movie.poster_path
        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` :NoImage}/>
     
        </Content>
    </Wrapper>
  );
};

export default MovieInfo;
