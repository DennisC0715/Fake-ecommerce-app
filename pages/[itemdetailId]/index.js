import BrakeDetail from "../../component/ItemsInShop/BrakeDetail";
import fullset from "../../component/detailPageImages/fullsetdetail.jpg";
import frontset from "../../component/detailPageImages/frontsetdetail.jpg";
import rearset from "../../component/detailPageImages/rearsetdetail.jpg";
import oesfull from "../../component/img/OESFull.jpg";

const ItemDetail = (props) => {
  return (
    <BrakeDetail
      image={props.detailData.image}
      detailImage={props.detailData.detailImage}
      set={props.detailData.set}
      year={props.detailData.year}
      engine={props.detailData.engine}
      made={props.detailData.made}
      model={props.detailData.model}
      key={props.detailData.id}
      id={props.detailData.id}
      isFavorite={props.detailData.isFavorite}
      description={props.detailData.description}
      price={props.detailData.price}
      item={props.detailData}
    />
  );
};
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          itemdetailId: "b1",
        },
      },
      {
        params: {
          itemdetailId: "b2",
        },
      },
      {
        params: {
          itemdetailId: "b3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const detailId = context.params.itemdetailId;

  return {
    props: {
      detailData: {
        id: detailId,
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
    },
  };
}

export default ItemDetail;
