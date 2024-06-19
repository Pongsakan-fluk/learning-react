import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center space-y-5">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Welcome to Home page
      </h1>
      <Link to="/menu" className="btn btn-primary">Menu</Link>
    </div>
  );
}

export default Home;
