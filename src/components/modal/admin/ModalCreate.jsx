import React, { useState, useEffect } from "react";
import { createProduct } from "../../../functions/product/product";

function ModalCreate() {
  const [value, setValue] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createProduct(value)
      .then((res) => {
        alert(`Create Product ${res.data.title} success!`)
      })
      .catch((err) => {
        console.log(`Create Product Fail !! ${err}`);
      });
  };

  return (
    <dialog id="modal_create" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Content */}
        <h1 className="text-3xl mb-5">Create Product</h1>

        <form>
          <input
            required
            name="title"
            type="text"
            placeholder="title"
            className="input w-full"
            onChange={handleChange}
          />
          <input
            required
            name="price"
            type="text"
            placeholder="price"
            className="mt-5 input w-full"
            onChange={handleChange}
          />
          <input
            required
            name="description"
            type="text"
            placeholder="description"
            className="mt-5 input w-full"
            onChange={handleChange}
          />
          <button
            className="mt-5 btn btn-primary w-full"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default ModalCreate;
