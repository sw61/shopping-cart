import { useState, useRef } from "react";
import styled from "styled-components";

import ShopInsert from "./ShopInsert";
import ShopList from "./ShopList";
import CartList from "./CartList";

const ShopTemplate = () => {
  const nextId = useRef(3);
  const [things, setThings] = useState([
    {
      id: 1,
      text: "소주",
      price: "6000원",
    },
    { id: 2, text: "맥주", price: "6000원" },
    { id: 3, text: "양주", price: "10000원" },
  ]);
  console.log(things);
  const onInsert = (text, price) => {
    const thing = {
      id: nextId.current,
      text,
      price,
    };
    setThings(things.concat(thing));
    nextId.current++;
  };

  return (
    <>
      <ShopHeader>물 건 리 스 트</ShopHeader>
      <ShopInsert onInsert={onInsert}></ShopInsert>
      <ShopList things={things}></ShopList>
      <ItemHeader>쇼 핑 카 트</ItemHeader>
      <CartList></CartList>
    </>
  );
};
export default ShopTemplate;
const ShopHeader = styled.div``;
const ItemHeader = styled.div``;
// [필요 기능]
// 1. 물건을 등록할 인풋창 만들기. 인풋에는 ‘상품명’, ‘상품가격’을 입력받음.
// 2. 물건을 입력하면 화면에 리스트로 출력하기.
// 3. 물건 리스트에서 쇼핑카트 담기 버튼을 클릭시 물건을 담음.
// 4. 담아진 물건 리스트도 출력하며, 담아진 물건 리스트에서 각각의 물건 수량을 -, + 버튼을 통해 변경할 수 있음.
// 5. 담아진 물건 리스트 하단에 총 가격 출력하기. 4번 내용에서 -, +버튼이 있는데 예를 들어 2000원짜리 물건을 담으면 총 가격 2000원 출력. 이후 2000원짜리 물건에서 +버튼을 누르면 총 수량은 2개, 총 가격은 4000원 출력.
