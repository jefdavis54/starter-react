import React from "react";
import ReactDOM from "react-dom";
import StyledGlobal from "./styles/_global";

const App = () => (
  <>
    <StyledGlobal />
    <h1>Hello World!!</h1>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
