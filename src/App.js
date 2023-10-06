import { useEffect, useState } from "react";
import Hero from "./Hero.js";
import Entry from "./Entry.js";
import Info from "./Info.js";
import Loader from "./Loader.js";

import { getNasaImages } from "./api.js";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      try {
        const images = await getNasaImages(query);
        setData(images);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    setLoading(true);
    setData(null);
    setError(null);
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <Hero text="NASA Image Lookup" />
      <Entry action={setQuery} />
      {loading && <Loader text="😄" />}
      {error ? (
        <span className="error-message">Sorry, something went wrong</span>
      ) : (
        <Info query={query} data={data} />
      )}
    </div>
  );
}

export default App;
