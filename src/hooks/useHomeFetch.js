import { useState, useEffect } from "react";
import API from "../API";
// import { isPersistedState } from "../helpers";
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
  const [isLoading, setIsLoading] = useState(false);

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
    // if (!searchTerm) {
    // const sessionState = isPersistedState("homeState");
    // if (sessionState) {
    //   console.log("Grabing from session storage", sessionState);
    //   setState(sessionState);
    //   return;
    // }
    // }
    setState(initialState);
    fetMovies(1, searchTerm);
  }, [searchTerm]);

  //Load more

  useEffect(() => {
    if (!isLoading) return;
    fetMovies(state.page + 1, searchTerm);
    setIsLoading(false);
  }, [isLoading, searchTerm, state.page]);

  //Write to sessionStorage

  // useEffect(() => {
  //   if (!searchTerm) {
  //     sessionStorage.setItem("homeState", JSON.stringify(state));
  //   }
  // }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoading };
};
