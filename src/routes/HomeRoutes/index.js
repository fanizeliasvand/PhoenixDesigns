/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate } from "react-router-dom";

// Layout Types
import BaseLayout from "../../layouts/BaseLayout";

// Route Views
import Home from "../../components/Home";
import Support from "../../components/Support";
import AboutUs from "../../components/AboutUs";
import Contact from "../../components/Contact"
import Product from "../../components/Product";
// import CategoryContainer from "../views/Category/CategoryContainer";

// eslint-disable-next-line import/no-mutable-exports
const routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/Support",
    exact: true,
    layout: BaseLayout,
    component: Support,
  },

  {
    path: "/AboutUs",
    exact: true,
    layout: BaseLayout,
    component: AboutUs,
  },
  {
    path: "/Contact",
    exact: true,
    layout: BaseLayout,
    component: Contact,
  },

  {
    path: "/product/:productName",
    exact: true,
    layout: BaseLayout,
    component: Product,
  },
  // {
  //   path: "/home",
  //   layout: BaseLayout,
  //   component: <Navigate to="/fashion-cube" />,
  // },

];

export default routes;
