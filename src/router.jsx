import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

//Components
import Home from "./pages/client/Home";
import Menu from "./pages/client/Menu";
import Contact from "./pages/client/Contact";
import ProtectRouteAdmin from "./pages/protectRoutes/ProtectRouteAdmin";
import AdminHome from "./pages/admin/AdminHome";
import Layout from "./Layout";
import ManageMenu from "./pages/admin/ManageMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {//Admin Routes
        path: "admin",
        element: <ProtectRouteAdmin />,
        children: [
          {
            index: true,
            element: <AdminHome />,
          },
          {
            path: "manage-menu",
            element: <ManageMenu />,
          },
        ]
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center text-center h-screen bg-slate-200">
        <div className="space-y-5">
          <p>There's nothing here: 404!</p>
          <Link to="/" className="btn btn-primary">
            Go to home page
          </Link>
        </div>
      </div>
    ),
  },
]);
