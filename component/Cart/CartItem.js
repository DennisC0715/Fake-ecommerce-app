import classes from "./CartItem.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartAddItem } from "../ReduxStore/slices/cartSlice";
import { cartRemoveItem } from "../ReduxStore/slices/cartSlice";

const CartItem = (props) => {
  const { id, itemQuantity, price } = props;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartAddItem({ id, itemQuantity, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartRemoveItem(id));
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Image src={props.image} alt={props.set} width={150} height={150} />
        <div className={classes.text}>
          <h3>
            {props.year} {props.made} {props.model} {props.set} BRAKE KIT.
          </h3>
          <h6>{props.description}</h6>
          <div className={classes.quantity}>
            x <span>{props.itemQuantity}</span>
          </div>
        </div>
        <div className={classes.price}>
          <p>${props.price}.00</p>
        </div>
        <div className={classes.details}>{`($${props.price}/item)`}</div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}> +</button>
          <button>REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
