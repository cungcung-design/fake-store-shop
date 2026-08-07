import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import PageLoader from "../components/PageLoader";

const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Cart = lazy(() => import("../pages/Cart"));
const Login = lazy(() => import("../pages/Login"));
const Checkout = lazy(() => import("../pages/Checkout"));
const OrderHistory = lazy(() => import("../pages/OrderHistory"));

const withSuspense = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "product/:id",
        element: withSuspense(ProductDetail),
      },
      {
        path: "cart",
        element: withSuspense(Cart),
      },
      {
        path: "login",
        element: withSuspense(Login),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            {withSuspense(Checkout)}
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute>
            {withSuspense(OrderHistory)}
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
