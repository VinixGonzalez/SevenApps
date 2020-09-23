import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../../App";

test("should render the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  expect(root.querySelector("h1").textContent).toBe("SevenApps - User Search");
});
