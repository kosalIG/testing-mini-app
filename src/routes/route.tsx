import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../util/ErrorBoundary";

const Home = lazy(()=>import('../pages/home'))

export const routes = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    errorElement: <ErrorBoundary />,
  },
]);
