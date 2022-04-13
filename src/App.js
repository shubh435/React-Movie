import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalStyle } from "./GloabalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:movieId" element={<Movie />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
