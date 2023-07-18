import React from "react";

const Type = ({ orderType }) => {
  return (
    <>
      <h2>{orderType}</h2>
      <p>하나의 가격 </p>
      <p>총 가격: </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "products" ? "row" : "column",
        }}
      >
        item
      </div>
    </>
  );
};

export default Type;
