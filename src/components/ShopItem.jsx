import styled from "styled-components";

const ShopItem = ({ thing, getItem }) => {
  const { id, text, price } = thing;

  return (
    <ShopItemContainer>
      <TextBox>{text}</TextBox>
      <PriceBox>{price}</PriceBox>
      <GetBtn onClick={() => getItem(thing)}>물건 담기</GetBtn>
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
