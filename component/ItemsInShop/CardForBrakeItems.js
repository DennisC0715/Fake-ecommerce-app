import classes from "./CardForBrakeItems.module.css";
import Image from "next/image";
import addtoWishlist from "../img/addtoWishlist.png";
import NoWishlist from "../img/NoWishlist.png";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const CardForBrakeItems = (props) => {
  const router = useRouter();
  const wishlist = useSelector((state) => state.wishlist.wishListItems);

  const item = wishlist[wishlist.length + 1] === props.id;
  const hasItem = wishlist.length > 0 && item;

  const favoriteIcon = hasItem ? addtoWishlist : NoWishlist;

  const detailPageHandler = () => {
    router.push("/" + props.id);
  };

  const log = () => {
    console.log(hasItem);
  };

  return (
    <div className={classes.card}>
      <Link href={"/" + props.id} passHref>
        <Image src={props.image} alt={props.set} width={300} height={300} />
      </Link>
      <h6>This {props.set} Brake Kit is for: </h6>
      <Link href={"/" + props.id} passHref>
        <h5>{`${props.year} ${props.made} ${props.model} ${props.engine}.`}</h5>
      </Link>
      <div className={classes.description}>
        <h6>{props.description}</h6>
      </div>
      <div className={classes.priceAndQuantity}>
        <h3>Price: ${props.price}</h3>
        <Image
          src={favoriteIcon}
          alt="wishlistIcon"
          width={40}
          height={40}
          className={classes.image}
          onClick={props.toggleWishList}
        />
      </div>
      <button onClick={props.onAddItem}>ADD TO CART</button>
      <button onClick={detailPageHandler}>SHOW DETAIL</button>
      <p>{hasItem ? "11111" : "22222222"}</p>
      <button onClick={log}>log</button>
    </div>
  );
};

export default CardForBrakeItems;
