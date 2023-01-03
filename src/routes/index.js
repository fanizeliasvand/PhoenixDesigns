import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import HomeRoutes from "./HomeRoutes";
// import PrivateRoutes from "./PrivateRoutes";

// const PrivateRouter = ({ component, ...options }) => {
//   const finalComponent =
//       <Navigate to="/PageNotFound" />;
//   return finalComponent;
// };


function AppRoutes(props) {
  return (
    <div>
      <Router>
        <Routes>
          {HomeRoutes.map((homeRoute) => {
            return (
              // <Route key={Math.random()} path={homeRoute.path} element={homeRoute.component} />
              <Route
                key={Math.random()}
                path={homeRoute.path}
                exact={homeRoute.exact}
                element={
                  <homeRoute.layout>
                    <homeRoute.component />
                  </homeRoute.layout>
                }
              />
            );
          })}
          {/* {PrivateRoutes.map((privateRoute, index) => {
            return (
              <Route
                key={privateRoute.path}
                path={privateRoute.path}
                exact={privateRoute.exact}
                element={
                  <privateRoute.layout>
                    <privateRoute.component />
                  </privateRoute.layout>
                }
              />
            );
          })} */}
          <Route path="*" to="/PageNotFound" exact element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
