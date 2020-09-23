import React from "react";
import MockAdapter from "axios-mock-adapter";
import * as ReactDOM from "react-dom";
import API from "../../services";
import Home from "../../routes/Home";

const mockAPI = new MockAdapter(API);

describe("Home page tests", () => {
  it("should fetch data from API", async () => {
    mockAPI.onGet("/users").reply(200, {
      data: [
        { name: "Test1", age: 20 },
        { name: "Test2", age: 33 },
        { name: "Test3", age: 57 },
      ],
    });
  });

  it("should render home without crash", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Home />, root);

    expect(root.querySelector("h1").textContent).toBe(
      "SevenApps - User Search"
    );
  });
});
