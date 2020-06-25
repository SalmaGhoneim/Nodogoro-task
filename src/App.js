import React from "react";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { GlobalStyle } from "./theme/globalStyle";
import { theme } from "./theme/theme";
import styled, { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import FlexContainer from "./elements/FlexContainer";
import { SearchContextProvider } from "./contexts/SearchContext";

const App = ({ className }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LanguageContextProvider>
        <SearchContextProvider>
          <FlexContainer
            alignItems="center"
            direction="column"
            className={className}
          >
            <FlexContainer
              direction="column"
              alignItems="center"
              className="flexGrow"
              width="100%"
            >
              <Header />
              <Home />
            </FlexContainer>
            <Footer />
          </FlexContainer>
        </SearchContextProvider>
      </LanguageContextProvider>
    </ThemeProvider>
  );
};

export default styled(App)`
  min-height: 100vh;
  width: 100%;
  .flexGrow {
    flex: 1 0 auto;
  }
`;
