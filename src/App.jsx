import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import RouteError from './components/RouteError';

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <RouteError />,
      children: [
        {
          path: "",
          element: <Home />
        }
      ]
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;
