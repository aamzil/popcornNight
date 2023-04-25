import React from "react";
import Requests from "./Requests";
import ShowsGrid from "./ShowsGrid";
import Navbar from "./Navbar";
import ShowSlider from "./ShowSlider";
import Footer from "./Footer";

function Shows() {
  return (
    <div className="shows">
      <Navbar />

      <ShowSlider fetch_url={Requests.topratedserie} />

      <ShowsGrid
        fetch_discover={Requests.topratedserie}
        fetch_search={Requests.searchserie}
        title="Discover Shows"
      />
    </div>
  );
}

export default Shows;
