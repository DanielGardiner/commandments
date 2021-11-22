import { createGlobalStyle } from "styled-components";
import modernNormalize from "styled-modern-normalize";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  h1, h2, h3, h4, h5, h6 {
    font-size: 20px;
    color: ${theme.textColor};
  }

  h1 {
    font-size: 25px;
  }

  p {
    font-size: 16px;
    color: ${theme.textColor};
  }


`;

export default GlobalStyle;
