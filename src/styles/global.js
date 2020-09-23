import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
}

ul {
  list-style-type: none;

}

body {
  -webkit-font-smoothing: antialiased;
  background: #eeeff2;
}

button,
input,
body,
textarea,
select,
label,
h1,
h2,
h3,
h4,
span {
  font-family: "Quicksand", sans-serif;
}

button {
  cursor: pointer;
}

body,
#root {
  min-height: 100vh;
}

`;

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 20px;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 10s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
