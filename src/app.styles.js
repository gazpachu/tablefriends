import React from 'react';
import { Global, css } from '@emotion/core';
import Bg from './assets/bg.png';

const colors = {
  brown: '#A79C8B'
};

const GlobalStyles = (props) => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.brown} url(${Bg});
      }

      .root {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
      }

      .app {
        background-color: rgba(0,0,0,.85);
        border-radius: 10px;
        width: 90%;
        min-height: 90%;
      }

      .app-header {
        text-align: center;
        color: ${colors.brown};

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
    `}
  />
);

export default GlobalStyles;
