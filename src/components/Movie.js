import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image

import NoImage from "../images/no_image.jpg";
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, eror } = useMovieFetch(movieId);

  console.log(movie);
  return <>moie</>;
};

export default Movie;
