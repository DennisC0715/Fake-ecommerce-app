import classes from "./CardForBrakeItems.module.css";
import Image from "next/image";

const CardForBrakeItems = (props) => {
  return (
    <div className={classes.card}>
      <Image src={props.image} alt={props.set} width={300} height={300} />
      <h6>This {props.set} Brake Kit is for: </h6>
      <h5>{`${props.year} ${props.made} ${props.model} ${props.engine}.`}</h5>
      <div className={classes.description}>
        <h6>{props.description}</h6>
      </div>
      <div className={classes.priceAndQuantity}>
        <h3>Price: ${props.price}</h3>
        <input placeholder="Quantity" type="number" max="10" min="0" />
      </div>
      <button>ADD TO WISHLIST</button>
      <button onClick={props.onAddItem}>ADD TO CART</button>
    </div>
  );
};

export default CardForBrakeItems;
