import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import Link from "next/link";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const cartItemNumber = useSelector((state) => state.cart.cartItemNumber);
  const showSummary = cartItemNumber > 0;

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
      itemQuantity={item.quantity}
    />
  ));

  const bagText = showSummary ? "YOUR BAG" : "YOUR BAG IS EMPTY";

  const itemText = cartItemNumber > 1 ? "items" : "item";

  const text = showSummary ? (
    <p>
      TOTAL {cartItemNumber} {itemText}
    </p>
  ) : (
    <p>
      Once you add something to your bag - it will appear here. Ready to get
      started? Click
      <Link href="/Shop" className={classes.nostyle}>
        {` here `}
      </Link>
      to start shopping!
    </p>
  );

  return (
    <div>
      <h1 className={classes.text}>{bagText}</h1>
      <h4 className={classes.text}>{text}</h4>
      <div className={classes.container}>
        <span>{itemsInCart}</span>
        <span className={classes.float}>
          {showSummary && <Checkout cartItem={cartItem} />}
        </span>
      </div>
    </div>
  );
};

export default Cart;
