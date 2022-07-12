import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import * as pallete from "./variables";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: ${pallete.backgroundColor};
}

button {
  color: ${pallete.primaryClrWhite};
}
h2, h3, p {
  color: ${pallete.textColor};
}

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
