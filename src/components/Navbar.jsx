import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";

function Navbar() {

  const navigate = useNavigate();
  const dataUser = JSON.parse(localStorage.getItem("login"));
  /* console.log(dataUser&& typeof dataUser); */

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      {/* Logo and sidebar */}
      <nav className={`navbar-start`}>
        <Sidebar />

        <Link to="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </nav>

      <div className="navbar-end hidden md:flex px-5">
        <ul className="flex space-x-5 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* Login and Logout */}
          {dataUser ? (
            <div className="dropdown border border-teal-500 rounded-md px-2 py-1 flex items-center text-teal-500">
              <p tabIndex={0}>{dataUser.username}</p>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-24 z-[1] p-2 border border-red-500 bg-neutral rounded-box"
              >
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <li className="cursor-pointer bg-success p-2 rounded-md" onClick={openModal}>
              <p>Login</p>
            </li>
          )}
          <li>
            {dataUser?.username && (
              <Link to="/admin" className="bg-success p-2 rounded-md">
                ADMIN
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
