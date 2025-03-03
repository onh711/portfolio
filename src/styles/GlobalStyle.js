import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
}
@media  (min-width: 770px) {
    html {
        font-size: 75%;
    }
}

  body {
    margin: 0;
    padding: 0;
    font-family: "Noto Serif JP", serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
`;
