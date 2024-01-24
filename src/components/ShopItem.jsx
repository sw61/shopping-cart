import styled from "styled-components";

const ShopItem = ({ thing, carts, setCarts, thingDelete }) => {
  const { id, text, price } = thing;
  const handleAddItem = (id) => {
    const itemInCart = carts.some((cartItem) => cartItem.id === id);
    {
      itemInCart
        ? console.log("이미 있는 상품입니다")
        : setCarts((prevCarts) => [...prevCarts, thing]);
    }
  };

  return (
    <ShopItemContainer>
      <TextBox>{text}</TextBox>
      <PriceBox>{price}원</PriceBox>
      <BtnContainer>
        <DelBtn onClick={() => thingDelete(id)}>X</DelBtn>
        <GetBtn onClick={() => handleAddItem(id)}>물건 담기</GetBtn>
      </BtnContainer>
    </ShopItemContainer>
  );
};
export default ShopItem;

const ShopItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px black;
  border-radius: 5px;
  height: 30px;
  padding-left: 10px;
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TextBox = styled.div`
  font-weight: bold;
`;
const PriceBox = styled.div`
  font-weight: bold;
`;
const GetBtn = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;

  height: 30px;
  font-weight: bold;
`;
const DelBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
`;
