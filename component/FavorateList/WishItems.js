import classes from "./WishItems.module.css";
import Image from "next/image";
import addtoWishlist from "../img/addtoWishlist.png";
// import NoWishlist from "../img/NoWishlist.png";
import { removeItemFromList } from "../ReduxStore/slices/wishListSlice";
import { useDispatch } from "react-redux";

const WishItem = (props) => {
  const { id, isFavirate, image, price, set, year, made, model } = props;

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItemFromList(id));
  };

  // const favImage = isFavirate ? NoWishlist : addtoWishlist;

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <Image src={image} alt={set} width={100} height={100} />
        <div className={classes.text}>
          <h3>
            {year} {made} {model} {set} BRAKE KIT.
          </h3>
          <div className={classes.price}>
            <p>Price: ${price}</p>
          </div>
        </div>
        <div className={classes.image}>
          <Image
            src={addtoWishlist}
            alt="FavImage"
            width={100}
            height={100}
            onClick={removeItemHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default WishItem;
