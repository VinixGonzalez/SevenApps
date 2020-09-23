import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Footer from "./components/Footer";
import { GlobalStyle, Wrapper, Container } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Routes />
          <Footer />
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
