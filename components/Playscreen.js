import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import "./Playscreen.css";

function Playscreen() {
  const location = useLocation();
  const { Movie } = location.state;
  const BASE_URL = `https://api.themoviedb.org/3/movie/${Movie}/videos?api_key=d2ebe74ae9a39c776ff8dcfab759bf0f&language=en-US`;
  const [Video, SetVideo] = useState();

  const fetchVideo = async () => {
    const response = await axios.get(BASE_URL);
    SetVideo(response.data.results);
  };

  const Title = Video?.find((trailer) => trailer.name === "Official Trailer");

  //   console.log("officicellckernce", Title);

  useEffect(() => {
    fetchVideo();
  }, []);

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      fullscreen: 1,
    },
  };
  return (
    <div className="playscreen">
      <YouTube className="player" videoId={Title?.key} opts={opts} />
    </div>
  );
}

export default Playscreen;
