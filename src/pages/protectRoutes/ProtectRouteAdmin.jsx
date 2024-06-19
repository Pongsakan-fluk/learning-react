import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function ProtectRouteAdmin() {
  const [admin, setAdmin] = useState(false);
  const dataUser = JSON.parse(localStorage.getItem("login"));

  const navigate = useNavigate();

  useEffect(() => {
    if (dataUser?.username) {
      setAdmin(true);
    } else {
      navigate("/");
    }
  }, [dataUser]);

  return admin && <Outlet />;
}

export default ProtectRouteAdmin;
