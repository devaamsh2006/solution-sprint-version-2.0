import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import About from './components/About';
import Domain from './components/Domain';
import FAQ from './components/FAQ';
import StatsOfLastEvent from './components/StatsOfLastEvent';
import RouteError from './components/RouteError';

function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <RouteError />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App
