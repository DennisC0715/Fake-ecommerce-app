import Card from "../layout/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartText = <h1>Cart Page</h1>;

  return (
    <Card className={classes.cart}>
      {cartText}

      <ul>
        <CartItem />
      </ul>
    </Card>
  );
};

export default Cart;
