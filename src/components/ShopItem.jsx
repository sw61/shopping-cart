import styled from "styled-components";

const ShopItem = ({ thing, carts, setCarts }) => {
  const { id, text, price } = thing;
  // const handleAddItem = (id) => {
  //   const itemInCart = carts.find((cartItem) => cartItem.id === id);
  //   {
  //     itemInCart
  //       ? console.log("이미 있는 상품입니다")
  //       : setCarts((prevCarts) => [...prevCarts, thing]);
  //   }
  // };
  const handleAddItem = (id) => {
    carts.find((cartItem) =>
      cartItem.id === id
        ? console.log("이미 담은 상품입니다")
        : setCarts((prev) => [...prev, thing])
    );
  };

  return (
    <ShopItemContainer>
      <TextBox>{text}</TextBox>
      <PriceBox>{price}</PriceBox>
      <GetBtn onClick={() => handleAddItem(id)}>물건 담기</GetBtn>
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
