import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../Pages/ErrorElement";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import PokedexPage from "../Pages/Pokedex";
import CatchPage from "../Pages/Catch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pokedex",
        element: <PokedexPage />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/catch/:id",
        element: <CatchPage />,
      },
    ],
  },
]);

export default router;
