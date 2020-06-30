import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { theme } from "./theme";
import Card from "./components/Card";
import { data } from "./data";
import "./styles.css";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.lightGrayishBlue};
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card {...data} />
      </Container>
    </ThemeProvider>
  );
}
