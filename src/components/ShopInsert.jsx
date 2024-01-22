import { useState } from "react";

const ShopInsert = (onInsert) => {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const onNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const onPriceChange = (event) => {
    setPriceValue(event.target.value);
  };
  const addItem = () => {
    onInsert(value);
    setValue("");
  };

  return (
    <>
      <input onNameChange={onNameChange} nameValue={nameValue}></input>
      <input onPriceChange={onPriceChange} priceValue={priceValue}></input>
      <button onClick={addItem}>담기</button>
    </>
  );
};
export default ShopInsert;
