import Leaderboard from "../components/leaderboard/Leaderboard";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";

describe("Leaderboard", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
