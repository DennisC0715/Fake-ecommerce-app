import { createSlice } from "@reduxjs/toolkit";
import oesfull from "../../img/OESFull.jpg";
import oesFront from "../../img/OESFront.jpg";
import oesRear from "../../img/OESrear.jpg";
import fullset from "../../detailPageImages/fullsetdetail.jpg";
import frontset from "../../detailPageImages/frontsetdetail.jpg";
import rearset from "../../detailPageImages/rearsetdetail.jpg";

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

const initialState = {
  products: {},
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
});

export async function getStaticProps() {
  // fetch aip to get date from database
  return {
    props: { brakeItems: Dummy_Brakes },
    revalidate: 10,
  };
}

export default productSlice.reducer;
