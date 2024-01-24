import { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const ShopInsert = ({ onInsert }) => {
  const priceValue = useInput("");
  const nameValue = useInput("");

  const addItem = () => {
    onInsert(nameValue.value, priceValue.value);
    nameValue.reset();
    priceValue.reset();
  };

  return (
    <>
      <InsertContainer>
        <InputBox
          onChange={nameValue.onChange}
          value={nameValue.value}
          placeholder="상품명"
        ></InputBox>
        <InputBox
          onChange={priceValue.onChange}
          value={priceValue.value}
          placeholder="상품 가격"
        ></InputBox>
        <ButtonBox onClick={addItem}>물건 등록</ButtonBox>
      </InsertContainer>
    </>
  );
};
export default ShopInsert;
const InsertContainer = styled.div`
  display: flex;
`;
const InputBox = styled.input`
  width: 161px;
  height: 25px;
  border-radius: 5px;
`;
const ButtonBox = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`;
