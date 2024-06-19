import React, { useState, useEffect } from "react";
import { readProduct, updateProduct } from "../../../functions/product/product";
import { useSearchParams, useNavigate } from "react-router-dom";

function ModalUpdate() {
  const [value, setValue] = useState({
    title: "",
    price: "",
    description: "",
  });

  const navigate = useNavigate()
  let [searchParams] =useSearchParams()
  let id = searchParams.get("id")


  const handleChange = (e) => {
    setValue({ ... value , [e.target.name]: e.target.value})
  }

  const handleReadProduct = (id) => {
    readProduct(searchParams.get("id"))
    .then((res) => {
      setValue(res.data);
    })
    .catch((err) => {
      console.log(`Read Product Fail!! ${err}`);
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    updateProduct(id, value)
    .then((res) => {
      alert(`Update Product ${res.data.title} success!`)
    })
    .catch((err) => {
      console.log(`Update Product Fail!! ${err}`);
    })
  }


  useEffect(() => {
    
    handleReadProduct(id)
  }, [id])

  return (
    <dialog id="modal_update" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => navigate("/admin")}>
            ✕
          </button>
        </form>

        {/* Content */}
        <h1 className="text-3xl mb-5">Update Product</h1>

        <form>
          <input
            required
            name="title"
            type="text"
            value={value?.title}
            className="input w-full"
            onChange={handleChange}
          />
          <input
            required
            name="price"
            type="text"
            value={value?.price}
            className="mt-5 input w-full bg-slate-200"
            onChange={handleChange}
          />
          <input
            required
            name="description"
            type="text"
            value={value?.description}
            className="mt-5 input w-full"
            onChange={handleChange}
          />
          <button
            className="mt-5 btn btn-primary w-full"
            type="submit"
            onClick={handleUpdate}
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default ModalUpdate;
