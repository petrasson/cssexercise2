import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FundedGrants from "./pages/FundedGrants";
import DiscoverInitiatives from "./pages/DiscoverInitiatives";
import ProgramExpenses from "./pages/ProgramExpenses/App";
import NotFoundPage from "./pages/NotFoundPage";
import FundedGrantDetails from "./pages/FundedGrantDetails";
import Grantee from "./pages/Grantee";
import Application from "./pages/Application";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DiscoverInitiatives />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/funded-grants",
    element: <FundedGrants />,
  },
  {
    path: "/program-expenses",
    element: <ProgramExpenses />,
  },
  {
    path: "/card/:id",
    element: <FundedGrantDetails />,
  },
  {
    path: "/apply",
    element: <Application />,
  },
  {
    path: "/grantee/:id",
    element: <Grantee />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
