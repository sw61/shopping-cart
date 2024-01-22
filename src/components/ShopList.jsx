import ShopItem from "./ShopItem";
const ShopList = ({ things }) => {
  return (
    <>
      {things.map((thing) => (
        <ShopItem thing={thing} id={thing.id} />
      ))}
    </>
  );
};
export default ShopList;
