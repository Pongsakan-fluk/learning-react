import React from "react";
import { Link } from "react-router-dom";

function ManageMenu() {
  return (
    <div className="text-center space-y-5">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Create menu
      </h1>
      <Link to="/admin" className="btn btn-primary">Back Admin home</Link>
    </div>
  );
}

export default ManageMenu;
