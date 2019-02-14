import React from 'react';
import { Global, css } from '@emotion/core';
import Bg from '../assets/bg-white.png';
import { colors } from './common.styles';

export const GlobalStyles = (props) => (
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
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.secondary} url(${Bg});
      }

      a, a:active, a:hover, a:visited {
        color: ${colors.secondary};
      }

      .root {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
      }

      .app {
        background-color: rgba(255,255,255,.95);
        border-radius: 10px;
        width: 100%;
        min-height: calc(100vh - 60px);
        margin: 30px;
        padding-bottom: 40px;
        color: ${colors.secondary};
      }

      .app-header {
        text-align: center;

        h1, h2 { font-weight: lighter; }

        h1 {
          border-bottom: 1px solid;
          margin-bottom: 0;
        }

        h2 {
          font-size: 10px;
          margin-top: 5px;
          text-transform: uppercase;
        }
      }

      .header-link {
        text-decoration: none;
        color: ${colors.secondary};
      }

      footer {
        text-align: center;
        font-size: 10px;
        position: absolute;
        left: 0;
        bottom: 55px;
        width: 100%;
      }
    `}
  />
);

export default GlobalStyles;
