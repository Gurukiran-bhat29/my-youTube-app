import { render, screen } from "@testing-library/react";
import VideoCard from "../VideoCard";
import { MOCK_DATA } from "../../mocks/videoCard";
import '@testing-library/jest-dom';

test('Should load Video card component with props data', () => {
  render(<VideoCard info={MOCK_DATA} />);

  const title = screen.getByText('Tej India');
  expect(title).toBeInTheDocument();
})