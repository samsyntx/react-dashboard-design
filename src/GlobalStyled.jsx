import { createGlobalStyle } from "styled-components";
import MetropolisRegular from './fonts/Metropolis-Regular.otf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Metropolis';
    src: url(${MetropolisRegular}) format('truetype');
  }
  body{
    font-family: 'Metropolis', sans-serif;
    margin: 0;
  }
  *{
    margin: 0;
    padding: 0;
  }
  button{
    cursor: pointer;
    font-family: 'Metropolis', sans-serif;
  }
`;

export default GlobalStyle;
