import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText("Checkout Form");
    expect(header !== null)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const fName = screen.getByLabelText("First Name:");
    fireEvent.change(fName, {target: {value: "Tester"}});
    const submit = screen.getByText("Checkout");
    fireEvent.click(submit);
    const success = screen.getByText("You have ordered some plants! Woo-hoo!");
    expect(success !== null)
});
