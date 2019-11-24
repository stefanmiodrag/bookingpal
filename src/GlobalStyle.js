import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import * as blueprint from "@blueprintjs/core/lib/css/blueprint.css"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${blueprint}

  body {
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif;
    background-color: #f5f8fa;
  }

  #page {
    margin-left: 300px;
    transition: margin-left 0.2s ease;
  }

  #App.small-nav #page {
    margin-left: 76px;
  }
`

export default GlobalStyle;