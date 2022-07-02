import Nav from "../components/Nav";
import Login from "../components/Login";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { MemoryRouter } from "react-router";

describe("Nav", () => {
  it("will match snapshot", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
