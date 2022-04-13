import { useState, useEffect, useRef } from "react";
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};
export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(searchTerm);
  const fetMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));

      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  //Initial render and search
  useEffect(() => {
    setState(initialState)
    fetMovies(1, searchTerm);
  }, [searchTerm]);

  return { state, loading, error, searchTerm,setSearchTerm };
};
