import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppLayout from "./layouts/AppLayout";

// Lazy imports
const Login = lazy(() => import("../features/auth/pages/Login"));
const Register = lazy(() => import("../features/auth/pages/Register"));
const Dashboard = lazy(() => import("../features/dashboard/pages/Dashboard"));
const Transactions = lazy(() => import("../features/transactions/pages/Transactions"));
const Insights = lazy(() => import("../features/insights/pages/Insights"));

// Loader component
const Loader = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/transactions",
        element: (
          <Suspense fallback={<Loader />}>
            <Transactions />
          </Suspense>
        ),
      },
      {
        path: "/insights",
        element: (
          <Suspense fallback={<Loader />}>
            <Insights />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader />}>
        <Register />
      </Suspense>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}