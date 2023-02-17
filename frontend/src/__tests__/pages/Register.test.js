import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Register from '../../pages/Register';
import "@testing-library/jest-dom";
import * as router from 'react-router'

const navigate = jest.fn()

beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

afterEach(() => {
    cleanup();
});

test("should render Register component", () => {
    render(<Register />);

    let formElem = screen.getByTestId("register");

    expect(formElem).toBeInTheDocument();
});