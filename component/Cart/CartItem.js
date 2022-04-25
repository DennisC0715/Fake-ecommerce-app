import classes from "./CartItem.module.css";
import Image from "next/image";

const CartItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Image src={props.image} alt={props.set} width={200} height={200} />
        <div className={classes.text}>
          <h3>
            {props.year} {props.made} {props.model} {props.set} BRAKE KIT.
          </h3>
          <h6>{props.description}</h6>
          <div className={classes.quantity}>
            x <span>1</span>
          </div>
        </div>
        <div className={classes.price}>
          <p>{props.price}</p>
          <div className={classes.details}>
            <div className={classes.actions}>
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
