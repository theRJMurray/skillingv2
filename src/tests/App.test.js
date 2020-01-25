import React from "react";
import { render, toHaveValue } from "@testing-library/react";
import App from "./../App.js";

test("renders", () => {
	const { getByTestId } = render(<App />);
	const test = getByTestId("test");
	expect(test).toHaveValue("Hi");
});
