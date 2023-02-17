import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Confirmation from '../../pages/Confirmation';
import "@testing-library/jest-dom";

afterEach(() => {
    cleanup();
});

test("should render RegisterForm component", () => {
    render(<Confirmation />);

    let formElem = screen.getByTestId("confirmation");

    expect(formElem).toBeInTheDocument();
});