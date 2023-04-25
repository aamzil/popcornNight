import React from "react";
import Footer from "./Footer";
import Heropage from "./Heropage";
import Navbar from "./Navbar";
import Requests from "./Requests";
import Row from "./Row";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Heropage />
      <Row title="Recommended For You" fetch_url={Requests.discover} />
      <Row title="Upcoming Movies" fetch_url={Requests.upcoming} />
      <Row title="Trending Movies" fetch_url={Requests.trending} />
      <Row title="Top Rated Movies" fetch_url={Requests.toprated} />
      <Footer />
    </div>
  );
}

export default Home;
