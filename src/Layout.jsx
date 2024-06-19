import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Login from "./components/modal/Login";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar */}
      <Navbar />

      {/* Content */}
      <main className="bg-slate-100 flex-grow flex justify-center items-center">
        <Outlet />
      </main>

      {/* Modal Login */}
      <Login />

      {/* Footer */}
      <footer className="bg-blue-100">
        <p className="text-center">Footer</p>
      </footer>
    </div>
  );
}

export default Layout;
