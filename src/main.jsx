import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FundedGrants from "./pages/FundedGrants";
import DiscoverInitiatives from "./pages/DiscoverInitiatives";
import ProgramExpenses from "./pages/ProgramExpenses";
import NotFoundPage from "./pages/NotFoundPage";
import FundedGrantDetails from "./pages/FundedGrantDetails";
import Grantee from "./pages/Grantee";
import Application from "./pages/Application";
import FaqPage from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
// import { QueryClient, QueryClientProvider } from 'react-query'

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const queryClient = new QueryClient();

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
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// <StrictMode>
// <QueryClientProvider client={queryClient}>
// <RouterProvider router={router} />
// </QueryClientProvider>
// </StrictMode>
