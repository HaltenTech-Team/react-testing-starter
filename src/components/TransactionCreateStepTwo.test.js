import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepThree from "./TransactionCreateStepTwo"

test('On initial render, the pay button is disabled', async () => {
    render(<TransactionCreateStepThree sender={{id: '5'}} receiver={{id: '5'}}/>);

    expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
})

test('If an amount and note is entered, the pay button becomes enabled', async () => {
    render(<TransactionCreateStepThree sender={{id: '5'}} receiver={{id: '5'}}/>);

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "some test");

    expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
})

test('Check pay button on initial render and after an amount and note is entered, the pay button becomes enabled', async () => {
    render(<TransactionCreateStepThree sender={{id: '5'}} receiver={{id: '5'}}/>);

    expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
    userEvent.type(screen.getByPlaceholderText(/add a note/i), "some test");

    expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();
})