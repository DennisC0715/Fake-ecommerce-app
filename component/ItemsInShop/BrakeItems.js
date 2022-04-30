import classes from "./BrakeItems.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardForBrakeItems from "./CardForBrakeItems";
import { cartAddItem } from "../ReduxStore/slices/cartSlice";
import { useDispatch } from "react-redux";
import { wishListToggle } from "../ReduxStore/slices/wishListSlice";

const BrakeItems = (props) => {
  const brakeData = props.itemData;
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartAddItem(item));
  };

  const removeItemHandler = (id) => {
    dispatch();
  };

  const toggleWishListHandler = (item) => {
    dispatch(wishListToggle(item));
  };

  const products = brakeData.map((item) => (
    <CardForBrakeItems
      key={item.id}
      id={item.id}
      set={item.set}
      year={item.year}
      made={item.made}
      model={item.model}
      engine={item.engine}
      price={item.price}
      image={item.image}
      isFavorite={item.isFavorite}
      description={item.description}
      onAddItem={addItemHandler.bind(null, item)}
      onRemoveItem={removeItemHandler.bind(null, item.id)}
      toggleWishList={toggleWishListHandler.bind(null, item)}
      item={item}
    />
  ));

  return <div className={classes.container}>{products}</div>;
};

export default BrakeItems;
