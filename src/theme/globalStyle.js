import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Montserrat';
  }
  
  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
  ::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: transparent;
}
`;
