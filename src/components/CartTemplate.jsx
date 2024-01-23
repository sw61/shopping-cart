import { useState, useRef } from "react";
import CartItem from "./CartItem";
const CartTemplate = ({ carts, addCount, minusCount }) => {
  return (
    <>
      {carts.map((cart) => (
        <CartItem
          key={cart.id}
          cart={cart}
          addCount={addCount}
          minusCount={minusCount}
        />
      ))}
      <div>물건 개수:</div>
      <div>총 가격</div>
    </>
  );
};
export default CartTemplate;
