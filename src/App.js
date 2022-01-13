import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Popular Shows" fetchUrl={requests.fetchTvPopular} />
      <Row title="Top Rated Shows" fetchUrl={requests.fetchTvTop} />
    </div>
  );
}

export default App;
