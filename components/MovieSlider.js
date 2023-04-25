import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function MovieSlider({ fetch_url }) {
  const [SliderMovie, SetSliderMovie] = useState(null);

  // function to fetch a random movie for the slider background
  const fetchSliderMovie = async () => {
    const response = await axios.get(fetch_url);
    SetSliderMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  };

  useEffect(() => {
    fetchSliderMovie();
  }, []);

  return (
    <div className="slider">
      <div className="slider__container">
        <Link
          to={{
            pathname: `/MoviesDetails/${
              SliderMovie?.original_title || SliderMovie?.name
            }`,
          }}
          state={{ Movie: SliderMovie?.id }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${SliderMovie?.backdrop_path}`}
            alt=""
            srcset=""
          />
        </Link>
      </div>
    </div>
  );
}

export default MovieSlider;
