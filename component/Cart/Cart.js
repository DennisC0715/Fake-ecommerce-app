import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const button = () => {
    console.log(cartItem);
  };

  const itemsInCart = cartItem.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      set={item.set}
      year={item.year}
      made={item.made}
      model={item.model}
      engine={item.engine}
      price={item.price}
      image={item.image}
      description={item.description}
      itemQuantity={item.itemQuantity}
    />
  ));

  return (
    <div className={classes.container}>
      <span>{itemsInCart}</span>
      <span className={classes.float} >
        <Checkout />
      </span>
    </div>
  );
};

export default Cart;
