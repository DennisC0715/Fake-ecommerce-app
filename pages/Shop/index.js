import BrakeItems from "../../component/ItemsInShop/BrakeItems";
import oesfull from "../../component/img/OESFull.jpg";
import oesFront from "../../component/img/OESFront.jpg";
import oesRear from "../../component/img/OESrear.jpg";
import fullset from "../../component/detailPageImages/fullsetdetail.jpg";
import frontset from "../../component/detailPageImages/frontsetdetail.jpg";
import rearset from "../../component/detailPageImages/rearsetdetail.jpg";
import { useSelector } from "react-redux";

const Dummy_Brakes = [
  {
    id: "b1",
    set: "Full Set",
    year: "2022",
    made: "RAM",
    model: "1500",
    engine: "ALL ENGINE",
    price: "500",
    isFavorite: false,
    detailImage: fullset,
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
    detailImage: frontset,
    isFavorite: false,
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
    isFavorite: false,
    detailImage: rearset,
    description:
      "It includes included 2 REAR Brake Roters and 4 REAR Brake Pads.",
  },
];

const Brakes = (props) => {
  return <BrakeItems itemData={props.brakeItems} />;
};

export async function getStaticProps() {
  // fetch aip to get date from database
  return {
    props: { brakeItems: Dummy_Brakes },
    revalidate: 10,
  };
}

export default Brakes;
