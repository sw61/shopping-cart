const CartItem = ({ item }) => {
  return (
    <>
      <button>-</button>
      <div>{item.text}</div>
      <div>{item.price}</div>
      <button>+</button>
    </>
  );
};
export default CartItem;
