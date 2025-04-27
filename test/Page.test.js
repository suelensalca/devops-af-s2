import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "../app/page";

test("email input should be empty", () => {
    render(<Home />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput.value).toBe('')
})

test("button should not be visible on render", () => {
    render(<Home />);
    const buttonEl = screen.getByTestId("cadastrar");
    expect(buttonEl).not.toBeVisible()
})

test("email input should change", () => {
    render(<Home />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const testValue = "test";

    fireEvent.change(emailInput, { target: { value: testValue } });
    expect(emailInput.value).toBe(testValue)

})

test("button should be visible if email input", () => {
    render(<Home />);
    const buttonEl = screen.getByTestId("cadastrar");
    const emailInput = screen.getByPlaceholderText(/email/i);
    const testValue = "test";


    fireEvent.change(emailInput, { target: { value: testValue } });
    expect(buttonEl).toBeVisible()
})

test("post should be visible on change post", () => {
    render(<Home />);
    const buttonPost = screen.getByTestId("button-post");

    fireEvent.click(buttonPost);

    const postEl = screen.getByTestId("post");

    expect(postEl).toBeVisible()
})

test("post should change on button click", () => {
    render(<Home />);
    const buttonPost = screen.getByTestId("button-post");

    fireEvent.click(buttonPost);

    const initialText = screen.getByText((content) => content.includes("Ajude primeiro"));
    expect(initialText).toBeInTheDocument();

    fireEvent.click(buttonPost);

    const newText = screen.getByText((content) => content.includes("Você vende uma solução"));
    expect(newText).toBeInTheDocument();
})
