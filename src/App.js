import React from "react";
import "./Css/App.css";
import Row from "./Components/Row";
import requests from "./Components/requests";

function App() {
  return (
    <div className="app">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
