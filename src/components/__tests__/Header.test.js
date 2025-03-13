import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Header from '../Head';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { SUGGESTIONS_DATA } from '../../mocks/loadData';
import "@testing-library/jest-dom";

// test("should render header component with Login button", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Header />
/*         <Unknown />   <-- Here we can import which ever is being involved for the integration testing -->  */
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole('button', { name: 'login' });
//   // const loginButton = screen.getAllByText('login');

//   expect(loginButton).toBeInTheDocument();
// })

// test("should change component with Login button to Logout", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole('button', { name: 'login' });

//   fireEvent.click(loginButton);

//   const logoutButton = screen.getByRole('button', { name: 'logout'});

//   expect(logoutButton).toBeInTheDocument();
// })

test("Logo should load on Header rener", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId('logo');
  expect(logo[0].src).toBe('http://localhost/dummy.jpg');
})

test("Search field should load on render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

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
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const icon = header.getByTestId('user-icon');
  expect(icon.src).toBe('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s');
})