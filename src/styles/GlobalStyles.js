import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@400&display=swap');

  body {
    font-family: 'Playpen Sans', cursive, sans-serif;
    margin: 0;
    padding: 0;
    background: #fff;
    color: #22223b;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
