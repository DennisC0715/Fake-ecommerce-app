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

const BrakeItems = () => {
  return (
    <Container className={classes.top}>
      <Row lg={"auto"}>
        <Col width>
          <ShopItems />
        </Col>
       
      </Row>
    </Container>
  );
};
export default BrakeItems;
