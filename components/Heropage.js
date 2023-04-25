import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import "./Heropage.css";
import Requests from "./Requests";

function Heropage() {
  const [HeroMovie, SetHeroMovie] = useState(null);

  // function to fetch a random movie on each application mount
  const fetchHeroMovie = async () => {
    const response = await axios.get(Requests.discover);
    SetHeroMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  };

  // function to truncate the title and movie overview if the characters are more than a specified number
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const title =
    HeroMovie?.original_title || HeroMovie?.title || HeroMovie?.name;

  useEffect(() => {
    fetchHeroMovie();
  }, []);

  const heroStyles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${HeroMovie?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="heropage" style={heroStyles}>
      <div className="dark__overlay"></div>
      <div className="heropage__container">
        <h1 className="title">{truncateString(title, 35)}</h1>
        <p className="overview">{truncateString(HeroMovie?.overview, 300)}</p>
        <div className="heropage__buttons">
          <Link
            to={{ pathname: `/MoviesDetails/${HeroMovie?.original_title}` }}
            state={{ Movie: HeroMovie?.id }}
          >
            <button>Watch Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heropage;
