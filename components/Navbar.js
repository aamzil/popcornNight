import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Navbar.css";

function Navbar() {
  const [Show, HandleShow] = useState(false);
  const [Nav, HandleNav] = useState(false);

  const showBg = () => {
    if (window.scrollY > 100) {
      HandleShow(true);
    } else {
      HandleShow(false);
    }
  };

  window.addEventListener("scroll", showBg);

  return (
    <div className={`navbar ${Show && "navbar-bg"}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to={"/"}>
            <a href="">POPCORN NIGHT</a>
          </Link>
        </div>

        <div className="navbar__links">
          <Link to={"/Movies"}>
            <a href="">Movies</a>
          </Link>
          <Link to={"/Shows"}>
            <a href="">Shows</a>
          </Link>
          <Link to={"/Watchlist"}>
            <a href="">Watchlist</a>
          </Link>
          <Link onClick={() => auth.signOut()} to={""}>
            <a href="">Logout</a>
          </Link>
        </div>

        <svg
          onClick={() => HandleNav(!Nav)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          className="burger"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div className={`phone__navbar ${Nav ? "show__navbar" : ""}`}>
        <Link to={"/Movies"}>
          <a href="">Movies</a>
        </Link>
        <Link to={"/Shows"}>
          <a href="">Shows</a>
        </Link>
        <Link to={"/Watchlist"}>
          <a href="">Watchlist</a>
        </Link>
        <Link to={""} onClick={() => auth.signOut()}>
          <a href="">Logout</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
