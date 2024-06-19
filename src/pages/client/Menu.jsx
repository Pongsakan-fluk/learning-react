import React, { useState, useEffect } from "react";
import { listProduct, readProduct } from "../../functions/product/product";
import { useNavigate } from "react-router";

import ModalProduct from "../../components/modal/ModalProduct";

function Menu() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [idHover, setIdHover] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const fetchListProducts = () => {
    listProduct()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(`List product fail !! : ${err}`);
      });
  };

  const handleHover = (id) => {
    setIdHover(id);
  };

  const handleShowModal = (id) => {
    navigate(`/menu/?id=${id}`)
    setShowModal(true)
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="mt-2 text-center text-3xl my-10 uppercase text-teal-500 tracking-widest">
        Menu Shop
      </h1>

      {/* Category */}
      <div className="bg-white shadow-xl rounded-md w-fit mx-auto p-2">
        <ul className="flex justify-center items-center text-center space-x-5">
          <li className="bg-teal-500 p-2 rounded-md">
            <p>All</p>
          </li>
          <li>
            <p>Test</p>
          </li>
          <li>
            <p>Test2</p>
          </li>
          <li>
            <p>Test3</p>
          </li>
        </ul>
      </div>

      {/* Show Product Modal */}
      {showModal && <ModalProduct setShowModal={setShowModal} />}

      {/* Content product */}
      <div className="bg-white rounded-md shadow-xl my-10 py-20 flex flex-wrap justify-center gap-5">
        {product ? (
          product.map((item, idx) => (
            <div
              key={item?.id}
              id={item.id}
              className="card w-1/4 h-90 bg-base-100 shadow-xl image-full p-2 cursor-pointer"
              onMouseEnter={() => handleHover(item.id)}
              onClick={() => handleShowModal(item.id)}
            >
              <figure>
                <img src={item?.image} className="w-56" alt="Title" />
              </figure>
              {item.id == idHover && (
                <div className="card-body">
                  <h2 className="card-title">{item?.title}</h2>
                  <p>{item?.description.substring(0, 100)}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No, Product</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
