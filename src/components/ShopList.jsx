import ShopItem from "./ShopItem";
const ShopList = ({ things, carts, setCarts }) => {
  return (
    <>
      {things.map((thing) => (
        <ShopItem
          key={thing.id}
          thing={thing}
          carts={carts}
          setCarts={setCarts}
        />
      ))}
    </>
  );
};
export default ShopList;
