import Cart from "../../component/Cart/Cart";
import { useSelector } from "react-redux";

const ShopingCart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return <Cart />;
};

export default ShopingCart;
