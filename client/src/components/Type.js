import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import { Options } from "./Options";
import ErrorBanner from "./ErrorBanner";

const Type = ({ orderType }) => {
  //데이터 받아온거 기억
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
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
  if (error) {
    return <ErrorBanner message="에러가 발생했습니다" />;
  }

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
