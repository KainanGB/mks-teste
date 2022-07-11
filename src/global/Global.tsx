import { createGlobalStyle } from "styled-components";

import * as pallete from "./variables";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
}

h2, h3, p {
  color: ${pallete.textColor};
}

`;
