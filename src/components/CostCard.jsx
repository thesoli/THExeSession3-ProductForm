import React, { useState } from "react";

function CostCard({ data, deleteById }) {
  const [myCount, setMyCount] = useState(1);

  const decreaseHandler = () => {
    if (myCount > 0) {
      setMyCount(myCount - 1);
    }
  };

  const increaseHandler = () => {
    setMyCount(myCount + 1);
  };

  const deleteHandler = () => {
    deleteById(data.id);
  };

  return (
    <div className="cost-card">
      <div className="cost-card-detail">
        <img src={data.img} alt={data.title} className="cost-card-img" />
        <h2 className="cost-card-title">{data.title}</h2>
      </div>

      <div className="cost-card-amount">
        <div className="cost-card-count">
          <button onClick={deleteHandler} className="cost-card-count-trash-btn">
            <img
              src="data:image/png;base64,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"
              alt="trash can"
              className="trash-btn-img"
            />
          </button>
          <button onClick={decreaseHandler} className="cost-card-count-btn">
            -
          </button>
          <h2 className="cost-card-count-number">{myCount}</h2>
          <button onClick={increaseHandler} className="cost-card-count-btn">
            +
          </button>
        </div>

        <h2 className="cost-card-price">{data.price} $</h2>
      </div>
    </div>
  );
}

export default CostCard;
