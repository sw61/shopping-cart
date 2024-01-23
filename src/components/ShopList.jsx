import ShopItem from "./ShopItem";
const ShopList = ({ things, setCarts }) => {
  return (
    <>
      {things.map((thing) => (
        <ShopItem thing={thing} setCarts={setCarts} />
      ))}
    </>
  );
};
export default ShopList;
