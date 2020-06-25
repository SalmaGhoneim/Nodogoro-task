import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const search = () => {
    // call search endpoint here
  };

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider };
