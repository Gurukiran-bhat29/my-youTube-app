import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import '@testing-library/jest-dom';

describe('Contact Us Page test cases', () => {
  it('Should load contact us component', () => {
    render(<ContactUs />);
  
    const heading = screen.getByRole('heading');
  
    expect(heading).toBeInTheDocument();
  });
  
  test('Should load button inside Contact component', () => {
    render(<ContactUs />);
  
    const buttonText = screen.getByText('Submit');
    const button = screen.getByRole('button');
  
    expect(buttonText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  
  test('Should load 2 input boxes inside Contact component', () => {
    render(<ContactUs />);
  
    const inputBoxes = screen.getAllByRole('textbox');
    console.log('Inputs', inputBoxes.length);
  
    expect(inputBoxes.length).toBe(2);
  });
});
