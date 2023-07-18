import React from "react";
import Type from "../../components/Type";

const OrderPage = () => {
  return (
    <div>
      <h2>Travel Products</h2>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ marginTop: 20, display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div style={{ width: "50%" }}>
          <h2>Total Price: </h2>
          <button>주문</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
