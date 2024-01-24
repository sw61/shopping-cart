import { useState, useRef } from "react";
import CartItem from "./CartItem";

import styled from "styled-components";

const CartTemplate = ({
  carts,
  addCount,
  minusCount,
  totalCount,
  getTotalPrice,
  cartDelete,
}) => {
  return (
    <>
      <TotalContainer>
        <TotalBox>물건 개수 : {totalCount}개</TotalBox>
        <TotalBox>총 가격 : {getTotalPrice}원</TotalBox>
      </TotalContainer>
      {carts.map((cart) => (
        <CartItem
          key={cart.id}
          cart={cart}
          addCount={addCount}
          minusCount={minusCount}
          cartDelete={cartDelete}
        />
      ))}
    </>
  );
};
export default CartTemplate;
const TotalContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  height: 30px;
`;
const TotalBox = styled.div`
  font-weight: bold;
`;
