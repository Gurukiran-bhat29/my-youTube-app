import { fireEvent, render, waitFor } from '@testing-library/react';
import Header from '../Head';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import "@testing-library/jest-dom";
import { SUGGESTIONS_DATA } from '../../mocks/loadData';

test("Logo should load on Header rener", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const logo = header.getAllByTestId('logo');
  expect(logo[0].src).toBe('http://localhost/dummy.jpg');
})

test("Search field should load on render", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const searchField = header.getByTestId('search-field');

  // expect(searchField.innerHTML).toBe('Search');
  expect(searchField).toBeInTheDocument();
  expect(searchField.children.length).toBe(2);
})

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(SUGGESTIONS_DATA)
    }
  })
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

test("Search suggestions on enter (String)", async () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const searchInput = header.getByTestId('search-input');
  fireEvent.change(searchInput, {
    target: {
      value: 'Namaste javaScript'
    }
  })
  fireEvent.focus(searchInput);

  await waitFor(() => expect(header.getAllByTestId('suggestions')))

  const searchSuggestion = header.getByTestId('search-suggestion');
  expect(searchSuggestion.children.length).toBe(10);

  const searchButton = header.getByTestId('search-btn');
  fireEvent.click(searchButton)
})

test("user icon should load on render", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const icon = header.getByTestId('user-icon');
  expect(icon.src).toBe('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s');
})