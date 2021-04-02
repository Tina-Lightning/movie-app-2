import React, { useState, useContext, useEffect } from "react";

export const API_ENDPOINT = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TVSHOW_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("friend");

  const fetchShows = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log("Name of show: " + data.results[0].name);

      if (data.results.total_results > 0) {
        setShows(data.results);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "Show not found" });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows(`${API_ENDPOINT}&query=${query}`);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, error, shows, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
