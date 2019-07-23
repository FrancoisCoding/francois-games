import React from "react";
import CartItem from "./CartItem";
export default function CartList({ value }) {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map((item, index) => {
        return (
          <CartItem
            key={`${item.id}?index=${index}`}
            item={item}
            value={value}
          />
        );
      })}
    </div>
  );
}
