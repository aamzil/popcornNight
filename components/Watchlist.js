import React from "react";
import Navbar from "./Navbar";
import "./Watchlist.css";

function Watchlist() {
  return (
    <div className="watchlist">
      <Navbar />
      <div className="watchlist__container">
        <p>No Movies Added Yet.</p>
      </div>
    </div>
  );
}

export default Watchlist;
