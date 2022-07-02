import Dashboard from "../components/dashboard/Dashboard";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";

describe("Dashboard", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it("will register a click event when logout is clicked", () => {
    const component = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    // const logoutButton = getByTestId("logout-button");
    const filterOption = screen.getByTestId("answered-filter");

    fireEvent.click(filterOption);
    expect(component.getByTestId("unanswered-filter")).toBeInTheDocument();
  });
});
