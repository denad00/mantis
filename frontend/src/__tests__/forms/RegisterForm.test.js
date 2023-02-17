import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RegisterForm from '../../forms/RegisterForm';
import "@testing-library/jest-dom";
import * as router from 'react-router'

const navigate = jest.fn()

beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

afterEach(() => {
    cleanup();
});


describe("should render RegisterForm component", () => {
  it("should render RegisterForm component correctly", () => {
    render(<RegisterForm />);
    const element = screen.getByRole("form");
    expect(element).toBeInTheDocument();
  });
});