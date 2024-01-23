import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const CartItem = ({ cart, addCount, minusCount }) => {
  const { id, text, price, count } = cart;

  return (
    <>
      <CartContainer>
        <button onClick={() => minusCount(count)}>-</button>
        <div>{text}</div>
        <div>{price}</div>
        <button onClick={() => addCount(count)}>+</button>
        <div>{count}개</div>
      </CartContainer>
    </>
  );
};
export default CartItem;
const CartContainer = styled.div`
  display: flex;
`;
