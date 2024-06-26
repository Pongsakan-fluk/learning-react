import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct, listProduct } from "../../functions/product/product";

import { FiTrash2, FiEdit3 } from "react-icons/fi";
import ModalCreate from "../../components/modal/admin/ModalCreate";
import ModalUpdate from "../../components/modal/admin/ModalUpdate";
import ModalDelete from "../../components/modal/admin/ModalDelete";

function AdminHome() {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate()

  const fetchProduct = () => {
    listProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(`List Product Fail !! ${err}`);
      });
  };

  const openModalUpdate = (id) => {
    document.getElementById("modal_update").showModal()
    navigate(`/admin?id=${id}`)
  }

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure delete!")) {
      deleteProduct(id)
        .then((res) => {
          alert(`Delete Product ${res.data.title} success !!`);
        })
        .catch((err) => {
          console.log(`Delete Product Fail !! ${err}`);
        });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="text-center space-y-5">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Welcome to Admin page
      </h1>

      <div className="space-x-5">
        <button
          className="btn btn-primary"
          onClick={() => document.getElementById("modal_create").showModal()}
        >
          Create
        </button>
        <button
          className="btn btn-warning"
          onClick={() => document.getElementById("modal_update").showModal()}
        >
          Update
        </button>
        <button
          className="btn btn-error"
          onClick={() => document.getElementById("modal_delete").showModal()}
        >
          Delete
        </button>

        {/* Modal create Update */}
        <ModalCreate />
        <ModalUpdate />
        <ModalDelete />
      </div>

      <div className="overflow-x-auto rounded-md w-4/5 h-96 mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-slate-200">
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {product ? (
              product.map((item, idx) => (
                <tr key={item?.id}>
                  <th>{item?.id}</th>
                  <td>{item?.title}</td>
                  <td>{item?.price}</td>
                  <td>
                    <img src={item?.image} alt="Title" className="w-32 h-20" />
                  </td>
                  <td>{item?.description.substring(0, 100)}</td>
                  <td className="text-error flex space-x-2">
                    <FiEdit3
                      size={32}
                      role="button"
                      onClick={() => openModalUpdate(item.id)}
                    />
                    <FiTrash2
                      size={32}
                      role="button"
                      onClick={() => handleDeleteProduct(item.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <p>No, Product..</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminHome;
