// import Cart from "../../component/Cart/Cart";
import { useSelector } from "react-redux";

const ShopingCart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div>
      <h1>Cart page aws</h1>
      <h1>{totalPrice}</h1>
    </div>
  );
};

export default ShopingCart;
