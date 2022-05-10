import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    --header-font-weight: 600;
    --header-font-size: 1.15rem;
    --header-font: 'Nunito Sans', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
  }

  .link {
    text-decoration: none;
  }
`

export default GlobalStyles