import Question from "../components/dashboard/Question";
import React from "react";
import { render } from "@testing-library/react";

describe("Question", () => {
  it("will match snapshot", () => {
    var component = render(<Question />);
    expect(component).toMatchSnapShot();
  });
});
