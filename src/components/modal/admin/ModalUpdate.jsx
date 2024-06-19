import React, { useState, useEffect } from "react";

function ModalUpdate() {
  const [value, setValue] = useState();

  return (
    <dialog id="modal_update" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Content */}
        <h3 className="font-bold text-lg">Update!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
}

export default ModalUpdate;
