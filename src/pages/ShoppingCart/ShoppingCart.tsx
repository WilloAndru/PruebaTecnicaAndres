import { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  const data = JSON.parse(localStorage.getItem("shoppingCartData") || "[]");
  console.log(data);

  return <div></div>;
}

export default ShoppingCart;
