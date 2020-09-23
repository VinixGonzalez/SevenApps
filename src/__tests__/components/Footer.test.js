import * as React from "react";
import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

test("should render the correct content in footer component", () => {
  const { getByText } = render(<Footer name="appFooter" />);

  expect(getByText("made by Vinícius Gonzalez 🤓 - 2020")).toBeTruthy();
});
