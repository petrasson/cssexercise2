import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FundedGrants from "./pages/FundedGrants/App";
import DiscoverInitiatives from "./pages/FundedGrants/App";
import NotFoundPage from "./pages/NotFoundPage";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FundedGrants />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/discover-initatitives",
    element: <DiscoverInitiatives />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
