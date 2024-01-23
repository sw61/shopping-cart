import ShopItem from "./ShopItem";
const ShopList = ({ things, getItem }) => {
  return (
    <>
      {things.map((thing) => (
        <ShopItem thing={thing} getItem={getItem} />
      ))}
    </>
  );
};
export default ShopList;
