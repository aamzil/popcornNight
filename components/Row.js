import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Row.css";

function Row({ title, fetch_url }) {
  const [Movies, SetMovies] = useState(null);
  const IMG_URL = `https://image.tmdb.org/t/p/original/`;
  const navigate = useNavigate();

  const fetchRow = async () => {
    const response = await axios.get(fetch_url);
    SetMovies(response.data.results);
  };

  useEffect(() => {
    fetchRow();
  }, []);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__container">
        {Movies?.map((movie) => (
          <>
            <img
              onClick={() =>
                navigate(`/MoviesDetails/${movie?.original_title}`, {
                  state: { Movie: movie?.id },
                })
              }
              src={`${IMG_URL}${movie?.poster_path}`}
              alt=""
              srcset=""
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
