import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

function ShowSlider({ fetch_url }) {
  const [SliderShow, SetSliderShow] = useState(null);

  const fetchSliderShow = async () => {
    const response = await axios.get(fetch_url);
    SetSliderShow(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  };

  useEffect(() => {
    fetchSliderShow();
  }, []);

  return (
    <div className="slider">
      <div className="slider__container">
        <Link
          to={{ pathname: `/ShowsDetails/${SliderShow?.name}` }}
          state={{ Movie: SliderShow?.id }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${SliderShow?.backdrop_path}`}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default ShowSlider;
