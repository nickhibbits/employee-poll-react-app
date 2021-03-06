import Question from "../components/dashboard/Question";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { MemoryRouter } from "react-router";

describe("Question", () => {
  it("will match snapshot", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Question />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
