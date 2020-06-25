import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const [language, setLanguage] = useState("English");
  const toggleLanguage = () => {
    language === "English" ? setLanguage("Spanish") : setLanguage("English");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export { LanguageContextProvider };
