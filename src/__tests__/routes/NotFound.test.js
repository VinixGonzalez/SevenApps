import * as React from "react";
import * as ReactDOM from "react-dom";
import NotFound from "../../routes/NotFound";

test("should render the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<NotFound />, root);

  expect(root.querySelector("h1").textContent).toBe(
    "Desculpe, a página que você procura não existe..."
  );
});
