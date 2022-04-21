import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <header>
        <h3>title</h3>
        <div className={classes.price}>
          $100
          <span className={classes.itemprice}>$5/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>2</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
