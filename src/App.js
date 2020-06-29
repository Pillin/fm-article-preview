import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";
import Card from "./components/Card";
import { data } from "./data";
import "./styles.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card {...data} />
    </ThemeProvider>
  );
}
