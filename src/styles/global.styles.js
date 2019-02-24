import React from "react";
import { Global, css } from "@emotion/core";
import Bg from "../assets/bg-white.png";
import { colors } from "./common.styles";

export const GlobalStyles = props => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        position: relative;
        min-height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Helvetica Neue, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: lighter;
        background: ${colors.secondary} url(${Bg});
      }

      h3 {
        font-weight: lighter;
        font-size: 24px;
      }

      a,
      a:active,
      a:hover,
      a:visited {
        color: ${colors.secondary};
      }

      .root {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        min-height: 100vh;
      }
    `}
  />
);

export default GlobalStyles;
