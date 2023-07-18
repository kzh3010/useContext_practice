import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import { Options } from "./Options";

const Type = ({ orderType }) => {
  //데이터 받아온거 기억
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ItemComponent = orderType === "products" ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

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
        {optionItems}
      </div>
    </>
  );
};

export default Type;
