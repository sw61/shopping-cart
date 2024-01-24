import ShopItem from "./ShopItem";
const ShopList = ({ things, carts, setCarts, thingDelete }) => {
  return (
    <>
      {things.map((thing) => (
        <ShopItem
          key={thing.id}
          thing={thing}
          carts={carts}
          setCarts={setCarts}
          thingDelete={thingDelete}
        />
      ))}
    </>
  );
};
export default ShopList;
