import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// ** import routes
import routes from "./routers";

// ** import main components
import Navbar from "../components/layouts/Navbar/index";
import Sidemenue from "../components/layouts/Sidemenu";

// ** Routes
const viewsRoutes = routes.filter((ele) => ele.layout === "default");
const authRoutes = routes.filter((ele) => ele.layout === "auth");

// ** default layout
function mainLayout() {
  return (
    <>
      <Navbar />
      <Sidemenue />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

// ** Auth layout
function authLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={mainLayout()}>
          {viewsRoutes.map((ele, index) => (
            <Route key={index} path={ele.path} element={ele.component} />
          ))}
        </Route>
        <Route path="/" element={authLayout()}>
          {authRoutes.map((ele, index) => (
            <Route key={index} path={ele.path} element={ele.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
