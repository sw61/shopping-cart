import CartItem from "./CartItem";

const CartList = ({ carts }) => {
  return (
    <>
      {carts.map((item) => {
        <CartItem key={item.id} item={item} />;
      })}
    </>
  );
};
export default CartList;
