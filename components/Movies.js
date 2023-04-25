import React from "react";
import MoviesGrid from "./MoviesGrid";
import Navbar from "./Navbar";
import Requests from "./Requests";
import MovieSlider from "./MovieSlider";

function Movies() {
  return (
    <div className="movies">
      <Navbar />

      <MovieSlider fetch_url={Requests.upcoming} />
      <MoviesGrid
        fetch_discover={Requests.discover}
        fetch_search={Requests.searchMovie}
        title="Discover Movies"
      />
    </div>
  );
}

export default Movies;
