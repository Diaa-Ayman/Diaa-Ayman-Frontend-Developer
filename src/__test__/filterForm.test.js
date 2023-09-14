// Import the necessary dependencies and functions
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import store from "../store";

// Mock useDispatch and useSelector
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("FilterForm component", () => {
  test("should render correctly", () => {
    // Mock useSelector
    useSelector.mockReturnValueOnce([]);
    // Render the component
    render(
      <Provider store={store}>
        <FilterForm />
      </Provider>
    );

    // Assert
    expect(screen.getByPlaceholderText("status")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("landings")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("type")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
