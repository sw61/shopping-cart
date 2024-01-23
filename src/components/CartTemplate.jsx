import { useState, useRef } from "react";
import CartList from "./CartList";
const CartTemplate = ({ carts }) => {
  return (
    <>
      <CartList carts={carts} />
    </>
  );
};
export default CartTemplate;
