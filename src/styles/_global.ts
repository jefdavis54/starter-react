import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const StyledGlobal = createGlobalStyle`
  ${normalize}
  
  body {
    background: #222;
    color: #ddd;
  }
`;

export default StyledGlobal;
