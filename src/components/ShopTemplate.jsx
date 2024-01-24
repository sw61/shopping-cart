import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import ShopInsert from "./ShopInsert";
import ShopList from "./ShopList";
import CartTemplate from "./CartTemplate";

const ShopTemplate = () => {
  const nextId = useRef(4);
  const [things, setThings] = useState([
    {
      id: 1,
      text: "소주",
      price: "6000",
      count: 1,
    },
    { id: 2, text: "맥주", price: "6000", count: 1 },
    { id: 3, text: "양주", price: "10000", count: 1 },
  ]);
  const onInsert = (text, price) => {
    const thing = {
      id: nextId.current,
      text,
      price,
      count: 1,
    };
    setThings(things.concat(thing));
    nextId.current++;
  };
  const thingDelete = (id) => {
    const thingDelete = things.filter((thing) => thing.id !== id);
    setThings(thingDelete);
  };
  const [carts, setCarts] = useState([]);
  // 장바구니 아이템 개수 +
  const addCount = (id) => {
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.id === id ? { ...cart, count: cart.count + 1 } : cart
      )
    );
  };
  // 장바구니 아이템 개수 -
  const minusCount = (id) => {
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.id === id && cart.count > 0 // 0 이하로 안 내려가게 예외 처리
          ? { ...cart, count: cart.count - 1 }
          : cart
      )
    );
  };
  const totalCount = carts.reduce((total, cart) => total + cart.count, 0);
  const getTotalPrice = carts.reduce(
    (totalPrice, cart) => totalPrice + cart.count * cart.price,
    0
  );
  const cartDelete = (id) => {
    const cartDelete = carts.filter((cart) => cart.id !== id);
    setCarts(cartDelete);
  };

  return (
    <>
      <ShopContainer>
        <ShopHeader>물건 리스트</ShopHeader>
        <ShopInsert onInsert={onInsert}></ShopInsert>
        <ShopList
          key={things.id}
          things={things}
          carts={carts}
          setCarts={setCarts}
          thingDelete={thingDelete}
        ></ShopList>
      </ShopContainer>
      <CartContainer>
        <ItemHeader>쇼핑 카트</ItemHeader>
        <CartTemplate
          carts={carts}
          addCount={addCount}
          minusCount={minusCount}
          totalCount={totalCount}
          getTotalPrice={getTotalPrice}
          cartDelete={cartDelete}
        ></CartTemplate>
      </CartContainer>
    </>
  );
};
export default ShopTemplate;
const ShopContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin: 0 auto;
`;
const CartContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin: 0 auto;
`;
const ShopHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 40px;
  font-size: 24px;
  font-weight: bolder;
  border-radius: 5px;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 40px;
  font-size: 24px;
  font-weight: bolder;
  border-radius: 5px;
`;
// [필요 기능]
// 1. 물건을 등록할 인풋창 만들기. 인풋에는 ‘상품명’, ‘상품가격’을 입력받음.
// 2. 물건을 입력하면 화면에 리스트로 출력하기.
// 3. 물건 리스트에서 쇼핑카트 담기 버튼을 클릭시 물건을 담음.
// 4. 담아진 물건 리스트도 출력하며, 담아진 물건 리스트에서 각각의 물건 수량을 -, + 버튼을 통해 변경할 수 있음.
// 5. 담아진 물건 리스트 하단에 총 가격 출력하기. 4번 내용에서 -, +버튼이 있는데 예를 들어 2000원짜리 물건을 담으면 총 가격 2000원 출력. 이후 2000원짜리 물건에서 +버튼을 누르면 총 수량은 2개, 총 가격은 4000원 출력.
