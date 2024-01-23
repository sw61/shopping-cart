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
        <input
          onChange={nameValue.onChange}
          value={nameValue.value}
          placeholder="상품명"
        ></input>
        <input
          onChange={priceValue.onChange}
          value={priceValue.value}
          placeholder="상품 가격"
        ></input>
        <ButtonBox onClick={addItem}>물건 등록</ButtonBox>
      </InsertContainer>
    </>
  );
};
export default ShopInsert;
const InsertContainer = styled.div`
  display: flex;
`;
const ButtonBox = styled.button`
  cursor: pointer;
`;
