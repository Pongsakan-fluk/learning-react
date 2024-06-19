import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { readProduct } from "../../functions/product/product";

function ModalProduct({ setShowModal }) {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [data, setData] = useState();

  /* console.log(searchParams.get('id')); */

  const handleReadProduct = () => {
    readProduct(searchParams.get("id"))
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(`Read Product Fail !! : ${err}`);
      });
  };

  const closeModal = (e) => {
    e.preventDefault();

    setShowModal(false);
    navigate("/menu");
  };

  useEffect(() => {
    handleReadProduct();
  }, []);

  return (
    <div className="modal modal-open">
      {/* Content */}

      <div className="modal-box w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={data?.image}
            alt="Title"
            className="w-64 h-56 mx-auto"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{`${data?.title.substring(0,50)}...`}</h2>
          <p>{data?.description.substring(0,100)}</p>
        </div>
      </div>

      {/* Background modal */}
      <form className="modal-backdrop" onClick={closeModal}>
        <button>close</button>
      </form>
    </div>
  );
}

export default ModalProduct;
