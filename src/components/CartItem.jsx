import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const CartItem = ({ cart, addCount, minusCount, cartDelete }) => {
  const { id, text, price, count } = cart;

  return (
    <>
      <CartContainer>
        <TextBox>{text}</TextBox>
        <TextBox>{price}원</TextBox>
        <TextBox>{count}개</TextBox>
        <BtnContainer>
          <ButtonBox onClick={() => minusCount(id)}>-</ButtonBox>
          <ButtonBox onClick={() => addCount(id)}>+</ButtonBox>
          <ButtonBox onClick={() => cartDelete(id)}>X</ButtonBox>
        </BtnContainer>
      </CartContainer>
    </>
  );
};
export default CartItem;
const CartContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  border: solid 1px black;
  border-radius: 5px;
  height: 30px;
  padding: 0 10px;
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const ButtonBox = styled.button`
  width: 25px;
  height: 25px;
  background-color: black;
  color: white;
  border: none;
  border: solid 1px black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
`;
const TextBox = styled.div`
  font-weight: bold;
`;
