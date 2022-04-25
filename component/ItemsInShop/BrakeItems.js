// import OESFULL from "../img/OEsilversmallpicfull.jpg";
import classes from "./BrakeItems.module.css";
// import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/button";
import ShopItems from "./ShopItems";
// import Card from "react-bootstrap/Card";
import CardForBrakeItems from "./CardForBrakeItems";

import oesfull from "../img/OESFull.jpg";
import oesFront from "../img/OESFront.jpg";
import oesRear from "../img/OESrear.jpg";

import { cartAddItem } from "../ReduxStore/slices/cartSlice";
import { useDispatch } from "react-redux";

const Dummy_Brakes = [
  {
    id: "b1",
    set: "Full Set",
    year: "2022",
    made: "RAM",
    model: "1500",
    engine: "ALL ENGINE",
    price: "500",
    image: oesfull,
    description:
      "It includes included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT, 4 REAR) Brake Pads.",
  },
  {
    id: "b2",
    set: "Front Set",
    year: "2022",
    made: "RAM",
    model: "1500",
    engine: "ALL ENGINE",
    price: "320",
    image: oesFront,
    description:
      "It includes included 2 FRONT Brake Roters and 4 FRONT Brake Pads.",
  },
  {
    id: "b3",
    set: "Rear Set",
    year: "2022",
    made: "RAM",
    model: "1500",
    engine: "ALL ENGINE",
    price: "200",
    image: oesRear,
    description:
      "It includes included 2 REAR Brake Roters and 4 REAR Brake Pads.",
  },
];

const BrakeItems = () => {
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartAddItem(item));
  }

  const removeItemHandler = (id) => {
    dispatch();
  };

  const products = Dummy_Brakes.map((item) => (
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
      description={item.description}
      onAddItem={addItemHandler.bind(null, item)}
      onRemoveItem={removeItemHandler.bind(null, item.id)}
    />
  ));

  return (
    // <Container className={classes.top}>
    //   <Row lg={"auto"}>
    //     <Col width>
    //       <ShopItems />
    //     </Col>
    //   </Row>
    // </Container>
    <div className={classes.container}>{products}</div>
  );
};
export default BrakeItems;
