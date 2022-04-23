import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";
// import { Fragment } from "react";
import Image from "next/image";
import OESFULL from "../img/OESfull.jpg";
import OESFRONT from "../img/OESfront.jpg";
import OESREAR from "../img/OESrear.jpg";
import classes from "./ShopItems.module.css";
import { useState } from "react";
import { addItem } from "../ReduxStore/slices/cartSlice";
import { useDispatch } from "react-redux";

export const DUMMT_brakeProducts = [
  {
    ram1500_2022: [
      {
        id: "2022RAM1500FULL",
        price: 500,
        image: OESFULL,
        description:
          "This FUll Set Package is included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
      },
      {
        id: "2022RAM1500FRONT",
        price: 320,
        image: OESFRONT,
        description:
          "This Front Set Package is included 2 FRONT Brake Roters and 4 FRONT Brake Pads.",
      },
      {
        id: "2022RAM1500REAR",
        price: 200,
        image: OESREAR,
        description:
          "This REAR Set Package is included 2 REAR Brake Roters and 4 REAR Brake Pads.",
      },
    ],
    fordf150_2022: [
      {
        id: "2022RAM1500FULL",
        price: 500,
        image: OESFULL,
        description:
          "This FUll Set Package is included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
      },
      {
        id: "2022RAM1500FRONT",
        price: 320,
        image: OESFRONT,
        description:
          "This Front Set Package is included 2 FRONT Brake Roters and 4 FRONT Brake Pads.",
      },
      {
        id: "2022RAM1500REAR",
        price: 200,
        image: OESREAR,
        description:
          "This REAR Set Package is included 2 REAR Brake Roters and 4 REAR Brake Pads.",
      },
    ],
  },
];

const ShopItems = () => {
  const [item, setItem] = useState({
    id: "2022RAM1500FULL",
    price: 500,
    image: OESFULL,
    description:
      "This FUll Set Package is included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
  });

  const fullSetButton = () => {
    setItem({
      id: "2022RAM1500FULL",
      price: 500,
      image: OESFULL,
      description:
        "This FUll Set Package is included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
    });
  };

  const frontSetButton = () => {
    setItem({
      id: "2022RAM1500FRONT",
      price: 320,
      image: OESFRONT,
      description: `This Front Set Package is included 2 FRONT Brake Roters and 4 FRONT Brake Pads.`,
    });
  };

  const rearSetButton = () => {
    setItem({
      id: "2022RAM1500REAR",
      price: 200,
      image: OESREAR,
      description:
        "This REAR Set Package is included 2 REAR Brake Roters and 4 REAR Brake Pads.",
    });
  };

  const price = item.price;

  const text = item.description;

  const image = item.image;

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <Card style={{ width: "350px" }}>
      <Image src={image} alt="OENFULL" width={350} height={350} />
      <Card.Body>
        <Card.Title>This Brake kit is for {}</Card.Title>
        <Card.Title> ${price}</Card.Title>
        <div className={classes.div}>
          <Button variant="primary" onClick={fullSetButton} type="button">
            FULL SET
          </Button>
          <Button
            variant="primary"
            className={classes.btn}
            onClick={frontSetButton}
            type="button"
          >
            FRONT SET
          </Button>
          <Button
            variant="primary"
            className={classes.btn}
            onClick={rearSetButton}
            type="button"
          >
            REAR SET
          </Button>
        </div>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={addItemToCart}>
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShopItems;
