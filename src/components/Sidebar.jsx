import React from "react";
import { FiMenu } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle md:hidden"
      >
        <FiMenu size={35} />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-neutral rounded-box w-52"
      >
        <li>
          <a>Homepage</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
