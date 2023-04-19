import { render } from '@testing-library/react';
import Header from '../Head';

test("Logo should load on Header rener", () => {
  render(<Header />);
})