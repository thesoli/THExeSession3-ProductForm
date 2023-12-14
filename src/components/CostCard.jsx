import React, { useState } from "react";

function CostCard({ data }) {
  const [myCount, setMyCount] = useState(1);

  const decreaseHandler = () => {
    if (myCount > 0) {
      setMyCount(myCount - 1);
    }
  };

  const increaseHandler = () => {
    setMyCount(myCount + 1);
  };

  return (
    <div className="cost-card">
      <div className="cost-card-detail">
        <img src={data.img} alt={data.title} className="cost-card-img" />
        <h2 className="cost-card-title">{data.title}</h2>
      </div>

      <div className="cost-card-amount">
        <div className="cost-card-count">
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
