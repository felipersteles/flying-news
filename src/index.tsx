import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import clock from "./assets/clock_font.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const FontStyles = createGlobalStyle`
@font-face {
  font-family: "Alarm Clock";
  src: url(${clock});
}
`;

root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
