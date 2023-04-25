import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import "./Details.css";
import Navbar from "./Navbar";

function MoviesDetails() {
  const location = useLocation();
  const { Movie } = location.state;
  const VIDEO_URL = `https://api.themoviedb.org/3/movie/${Movie}/videos?api_key=d2ebe74ae9a39c776ff8dcfab759bf0f&language=en-US`;

  const [Details, SetDetails] = useState(null);
  const [Video, SetVideo] = useState();

  const BASE_URL = `https://api.themoviedb.org/3/movie/${Movie}?api_key=d2ebe74ae9a39c776ff8dcfab759bf0f&language=en-US`;

  const fetchDetails = async () => {
    const response = await axios.get(BASE_URL);
    SetDetails(response.data);
    window.scrollTo(0, 0);
  };

  const fetchVideo = async () => {
    const response = await axios.get(VIDEO_URL);
    SetVideo(response.data.results);
  };

  const Title = Video?.find(
    (trailer) =>
      trailer.name === "Official Trailer" || trailer.type === "Trailer"
  );

  const showVideo = () => {
    window.scrollTo(0, 999);
  };

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  useEffect(() => {
    fetchDetails();
    fetchVideo();
  }, []);

  const IMG_URL = `https://image.tmdb.org/t/p/original/`;

  const heroStyles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${Details?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="details" style={heroStyles}>
      <Navbar />

      <div className="dark__overlay"></div>
      <div className="details__container">
        <div className="details__left">
          <h1>{truncateString(Details?.original_title)}</h1>
          <p>
            <span>Genre: </span>
            {Details?.genres[0].name}
          </p>
          <p>
            <span>Vote Average: </span>
            {Math.trunc(Details?.vote_average)}/10
          </p>
          <p>
            <span>Release Date: </span>
            {Details?.release_date}
          </p>
          <p>
            <span>Overview: </span>
            {truncateString(Details?.overview, 250)}
          </p>

          <button onClick={() => showVideo()}>
            <div className="button__content">Play Trailer</div>
          </button>
        </div>

        <div className="details__right">
          <img
            src={`https://image.tmdb.org/t/p/original/${Details?.poster_path}`}
            alt=""
            srcset=""
            width={"50%"}
          />
        </div>
      </div>

      <YouTube
        id="videoplayer"
        videoId={Title?.key}
        opts={{
          width: "100%",
        }}
        className="player"
        style={{ display: "flex" }}
      />
    </div>
  );
}

export default MoviesDetails;
