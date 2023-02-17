import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Register from '../../pages/Register';
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
});

test("should render RegisterForm component", () => {
    render(<Register />);

    let formElem = screen.getByTestId("register");

    expect(formElem).toBeInTheDocument();
});