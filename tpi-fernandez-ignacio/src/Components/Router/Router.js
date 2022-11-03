import { Route, RouterProvider, Navigate, Link, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "../Layout/Layout";
import ArticleScreen from "../Screens/ArticleScreen";
import NotFound from "../Screens/NotFound";
import LoginScreen from "../Screens/LoginScreen";
import ArticleDetail from "../Screens/ArticleDetailScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/Articles" />} />
      <Route path="/Articles" element={<ArticleScreen />} />
      <Route path="/Login" element={<LoginScreen />} />

      <Route path="/Articles/:id" element={<ArticleDetail />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const Router = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
