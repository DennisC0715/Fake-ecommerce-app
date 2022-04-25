import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const subtotal = useSelector((state) => state.cart.totalPrice);
  const totalItemQuantity = useSelector((state) => state.cart.cartItemNumber);
  const saleTax = Math.ceil(Math.round(subtotal * 0.13));
  const deliveryFee = totalItemQuantity * 20;
  const totalPrice = subtotal + saleTax + deliveryFee;

  return (
    <div className={classes.container}>
      <h1 className={classes.marginleft}>order Summary</h1>
      <h5>
        <span className={classes.marginleft}>{totalItemQuantity} ITEMS</span>
        <span className={classes.split}>${subtotal}</span>
      </h5>
      <h5>
        <span className={classes.marginleft}>DELIVERY</span>
        <span className={classes.split}>{deliveryFee}</span>
      </h5>
      <h5>
        <span className={classes.marginleft}>SALE TAX</span>
        <span className={classes.split}>${saleTax}</span>
      </h5>
      <h3>
        <span className={classes.marginleft}>Total</span>
        <span className={classes.split}>${totalPrice}</span>
      </h3>
      <botton>PLACE ORDER</botton>
    </div>
  );
};

export default Checkout;
