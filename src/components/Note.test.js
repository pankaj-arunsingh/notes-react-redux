import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, prettyDOM, fireEvent } from "@testing-library/react";

import Note from "./Note";

describe("Note tests", () => {
  test("renders content", () => {
    const note = {
      content: "Component testing is done with react-testing-library",
      important: true,
    };
    const component = render(<Note note={note} />);
    // component.debug();
    //const li = component.container.querySelector("li");
    //console.log(prettyDOM(li));
    //method 1
    expect(component.container).toHaveTextContent(
      "Component testing is done with react-testing-library"
    );
    // method 2
    const element = component.getByText(
      "Component testing is done with react-testing-library"
    );
    expect(element).toBeDefined();
    const div = component.container.querySelector(".note");
    expect(div).toHaveTextContent(
      "Component testing is done with react-testing-library"
    );
  });
  test("clicking the button calls event handler once", () => {
    const note = {
      content: "Component testing is done with react-testing-library",
      important: true,
    };
    const mockHandler = jest.fn();
    const component = render(<Note note={note} handleClick={mockHandler} />);
    const button = component.getByText("make not important");
    //console.log(prettyDOM(button));
    fireEvent.click(button);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
