import App from "../components/App";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";

describe("App", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
