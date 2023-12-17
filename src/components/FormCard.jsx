import React, { useState } from "react";

function FormCard({ addNewProduct }) {
  const [myFormData, setMyFormData] = useState({ title: "", price: 0 });

  const submitHandler = (element) => {
    element.preventDefault();
    addNewProduct(myFormData);
    setMyFormData({ title: "", price: 0 });
  };

  const titleChangeHandler = (element) => {
    setMyFormData({ ...myFormData, title: element.target.value });
  };

  const priceChangeHandler = (element) => {
    setMyFormData({ ...myFormData, price: element.target.value });
  };

  return (
    <div>
      <form className="form-card" onSubmit={submitHandler}>
        <div className="form-card-input">
          <input
            type="text"
            placeholder="Product title"
            className="form-card-input-item"
            onChange={titleChangeHandler}
            value={myFormData.title}
          />
          <input
            type="number"
            placeholder="Product price"
            className="form-card-input-item"
            onChange={priceChangeHandler}
            value={myFormData.price}
          />
        </div>

        <button className="form-card-input-btn">add your product</button>
      </form>
    </div>
  );
}

export default FormCard;
