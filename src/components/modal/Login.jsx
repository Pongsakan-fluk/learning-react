import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("login", JSON.stringify(data));
    navigate("/");
    document.getElementById("my_modal_2").close();
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">Login</h3>

        {/* Content */}
        <div className="modal-action">
          <form>
            <input
              required
              name="username"
              type="text"
              placeholder="Username"
              className="input w-full"
              onChange={handleChange}
            />
            <input
              required
              name="password"
              type="password"
              placeholder="Password"
              className="mt-5 input w-full"
              onChange={handleChange}
            />
            <button
              className="mt-5 btn btn-primary w-full"
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      {/* Click background close modal */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Login;
