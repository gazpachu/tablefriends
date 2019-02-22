import React from 'react';
import { Global, css } from '@emotion/core';
import Bg from '../assets/bg-white.png';
import { colors, breakpoints } from './common.styles';

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
        box-shadow: 0 0 10px 0;
        width: 100%;
        color: ${colors.secondary};
        overflow: hidden;

        @media (min-width: ${breakpoints.mobile}) {
          margin: 30px;
          border-radius: 10px;
        }
      }

      .app-header {
        text-align: center;
        background-color: ${colors.primary};
        color: white;
        height: 80px;

        a { color: white; }

        h1, h2 { font-weight: lighter; }

        h1 {
          border-bottom: 1px solid rgba(255,255,255,.1);
          margin: 0;
          padding-top: 10px;

          &:after {
            content: 'beta';
            position: absolute;
            font-size: 11px;
          }
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
    `}
  />
);

export default GlobalStyles;
