import React, { useState, useContext, useEffect } from "react";

// export const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=$`;

export const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TVSHOW_API_KEY}`;
console.log(API_ENDPOINT);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
