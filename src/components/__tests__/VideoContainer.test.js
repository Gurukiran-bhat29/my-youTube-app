import { fireEvent, render, waitFor } from '@testing-library/react';
import VideoContainer from '../VideoContainer';
import WatchPage from '../WatchPage';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';
import { YOUTUBE_DATA } from '../../mocks/loadData';
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(YOUTUBE_DATA)
    }
  })
})

test("Videos should render on load", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <VideoContainer />
        <WatchPage />
      </Provider>
    </StaticRouter>
  );

  /* 
    ----> Is to test the Shimmer 
    const shimmer = body.getByTestId('shimmer');
    expect(shimmer.children.length).toBe(10);
  */

  /* Show the Shimmer till videos gets loaded */
  await waitFor(() => expect(body.getByTestId('video-container')))

  const videoResult = body.getByTestId('video-result');
  const selectedVideo = body.getAllByTestId('video-result');

  expect(videoResult.children.length).toBe(50);
  fireEvent.click(selectedVideo[0])
})
