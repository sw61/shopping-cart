import styled from "styled-components";

const ShopItem = ({ thing, setCarts }) => {
  const { id, text, price } = thing;
  const handleAddItem = () => {
    const getItem = { id, text, price };
    setCarts([id, text, price]);
  };

  return (
    <ShopItemContainer>
      <TextBox>{text}</TextBox>
      <PriceBox>{price}</PriceBox>
      <GetBtn onClick={handleAddItem}>물건 담기</GetBtn>
    </ShopItemContainer>
  );
};
export default ShopItem;

const ShopItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled.div``;
const PriceBox = styled.div``;
const GetBtn = styled.button`
  cursor: pointer;
`;
