import { fireEvent, screen } from '@testing-library/react';

it('CheckboxWithLabel changes the text after click', () => {
	expect(screen.getByLabelText(/Spanish/i)).toBeTruthy();
	fireEvent.click(screen.getByLabelText(/Spanish/i));
	expect(screen.getByLabelText(/Española/i)).toBeTruthy();
});
