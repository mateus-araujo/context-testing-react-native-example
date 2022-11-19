import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { NameProvider } from "../../util/NameManager";
import Main from "../Main";


it("render default text", () => {
  const screen = render(<Main />, { wrapper: NameProvider });

  screen.getByText("Welcome, No Name!");
});

it("changes the text on submit", () => {
  const screen = render(<Main />, { wrapper: NameProvider });

  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
  screen.getByText("Welcome, asdf!");

  fireEvent.press(screen.getByText("Change"));
  screen.getByText("Welcome, asdf!");
});

it("calls save on button press", () => {
  const saveName = jest.fn();
  const screen = render(<Main saveName={saveName} />);

  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
  fireEvent.press(screen.getByText("Change"));

  expect(saveName).toBeCalledWith("asdf");
});