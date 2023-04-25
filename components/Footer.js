import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__detail">
          <h1>POPCORN NIGHT</h1>
          <p>
            Popcorn night is a dynamic web application that provides a
            user-friendly interface for users to discover and preview the latest
            film releases. With real-time updates and a comprehensive API from
            TMDB, the user can easily browse trailers, read overviews, and mark
            their favorite movies for future reference.
          </p>
        </div>

        <div className="footer__tech">
          <h1>Technologies</h1>
          <p>React JS</p>
          <p>CSS</p>
          <p>React Router</p>
          <p>Redux</p>
          <p>Firebase</p>
        </div>

        <div className="footer__about">
          <h1>About</h1>
          <p>
            Ayoub Amzil a Junior Web Developer based in Rabat, Morocco. Seeking
            an opportunity to extend my web development skills and knowledge.
          </p>

          <a
            href="https://mega.nz/file/QuJjCR7J#n69gKkVEWxU8JEL1iErKpbFwDkCOxhY2v8QVltFkXb0"
            target="_blank"
          >
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
