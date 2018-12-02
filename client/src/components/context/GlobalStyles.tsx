import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    color: #fff;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  h1 {
    font-size: 3.6rem;
    color: rgba(255, 255, 255, 0.9);
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  }
}
`

export default GlobalStyles
