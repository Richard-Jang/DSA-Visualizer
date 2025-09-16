import { createBrowserRouter, Outlet, RouterProvider, type RouteObject } from 'react-router-dom';

import Route from '@pages/Route';

function App() {

  const rootRoute: RouteObject = {
    path: "",
    element: (<Outlet />),
    children: [...Route],
  }
  const router = createBrowserRouter([rootRoute], {});

  return (
    <RouterProvider router={router} />
  )
}

export default App;