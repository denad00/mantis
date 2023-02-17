import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Confirmation from '../../pages/Confirmation';
import "@testing-library/jest-dom";
import * as router from 'react-router'

jest.mock('react-router', () => ({
    ...jest.requireActual("react-router"),
       useLocation: jest.fn().mockImplementation(() => {
        return {state: { lastName: ""}}
       })
    }));

afterEach(() => {
    cleanup();
});

test("should render Confirmation component", () => {
    render(<Confirmation />);
    const { getByText } = within(screen.getByTestId('confirmation'))
expect(getByText('Thank you!')).toBeInTheDocument()
});