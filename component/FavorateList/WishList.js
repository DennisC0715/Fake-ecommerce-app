import { useSelector } from "react-redux";
import WishItem from "./WishItems";
import classes from "./WishList.module.css";
import { useEffect, useState } from "react";

const WishList = () => {
  const wishList = useSelector((state) => state.wishlist.wishListItems);

  const itemNumber = wishList.length;
  const hasItemInList = itemNumber > 0;
  const itemText = hasItemInList > 1 ? "ITEM" : "ITEMS";
  const itemTextP = hasItemInList
    ? ""
    : "You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.";

  const wishListItemInPage = wishList.map((item) => (
    <WishItem
      key={item.id}
      id={item.id}
      image={item.image}
      year={item.year}
      made={item.made}
      model={item.model}
      engine={item.engine}
      isFavirate={item.isFavirate}
      price={item.price}
      set={item.set}
    />
  ));

  return (
    <div className={classes.container}>
      <h1>MY WISHLIST</h1>
      <h3>
        {itemNumber} {itemText}
      </h3>
      <p>{itemTextP}</p>
      {wishListItemInPage}
    </div>
  );
};

export default WishList;
