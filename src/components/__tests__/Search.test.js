import { fireEvent, render, screen } from "@testing-library/react"
import VideoContainer from "../VideoContainer"
import store from '../../utils/store';
import { Provider } from "react-redux";
import { YOUTUBE_DATA } from "../../mocks/loadData";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(YOUTUBE_DATA)
    }
  })
})

beforeAll(() => {
  console.log('This will be called before all the test cases');
})

beforeEach(() => {
  console.log('This will be called before each test cases');
})

afterAll(() => {
  console.log('This will be called after all the test cases');
})

afterEach(() => {
  console.log('This will be called after each test cases');
})

test('Should render the Video container component with search', async () => {

  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VideoContainer />
        </Provider>
      </BrowserRouter>
    )
  )

  //Assume the video container has the search button
  const button = screen.getByRole('button', { name: 'search'});
  expect(button).toBeInTheDocument();
})

test('Should filter the results on search', async () => {

  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <VideoContainer />
        </Provider>
      </BrowserRouter>
    )
  )

  //Assume the video container has the search button
  const videoCardsBeforeSearch = screen.getAllByTestId('video-card');

  expect(videoCardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole('button', { name: 'search'});

  const searchInput = screen.getAllByTestId('searchInput');

  fireEvent.change(searchInput, {target: { value: 'cricket' }});

  fireEvent.click(searchButton);

  const videoCardsAfterSearch = screen.getAllByTestId('video-card');

  expect(videoCardsAfterSearch.length).toBe(5);
})