import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Grid.css";

function ShowsGrid({ fetch_discover, title, fetch_search }) {
  const [Data, SetData] = useState(null);
  const [SearchKey, SetSearchKey] = useState("");
  const IMG_URL = `https://image.tmdb.org/t/p/original/`;

  const fetchDiscover = async () => {
    const response = await axios.get(fetch_discover);
    SetData(response.data.results);
  };

  const fetchSearch = async (e) => {
    if (e.key == "Enter" && SearchKey !== "") {
      const response = await axios.get(fetch_search + `&query=${SearchKey}`);
      SetData(response.data.results);
    } else {
      fetchDiscover();
    }
  };

  useEffect(() => {
    fetchDiscover();
  }, []);

  return (
    <div className="grid">
      <div className="grid__head">
        <h1>{title}</h1>
        <input
          onKeyDown={fetchSearch}
          onChange={(e) => SetSearchKey(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Search..."
        />
      </div>
      <div className="grid__container">
        {Data?.map((footage) => (
          <Link
            to={{ pathname: `/ShowsDetails/${footage?.name}` }}
            state={{ Movie: footage?.id }}
          >
            <img
              key={footage?.id}
              src={`${IMG_URL}${footage?.poster_path}`}
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ShowsGrid;
