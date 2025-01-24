import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "../../routes/route";
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={routes} fallbackElement={<>Loading ...</>} />
    </>
  );
};

export default App;
