import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';

const WatchPage = lazy(() => import('./components/WatchPage'));
const SearchResult = lazy(() => import('./components/SearchResult'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element:
          <Suspense fallback={null}>
            <WatchPage />
          </Suspense>
      },
      {
        path: 'results',
        element:
          <Suspense fallback={null}>
            <SearchResult />
          </Suspense>

      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
