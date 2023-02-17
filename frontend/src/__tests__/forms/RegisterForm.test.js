import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RegisterForm from '../../forms/RegisterForm';
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
});

test("should render RegisterForm component", () => {
    render(<RegisterForm />);

    let formElem = screen.getByTestId("registerForm");

    expect(formElem).toBeInTheDocument();
});