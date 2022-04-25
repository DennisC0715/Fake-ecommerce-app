import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import imagessss from "../img/OESFront.jpg";

import classes from "./BrakeDetail.module.css";

const BrakeDetail = () => {
  return (
    <section>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={classes.mySwiper}
      >
        <SwiperSlide>
          <div className={classes.image}>
            <h1>
              This Full Set Brake Kit is for: 2022 RAM 1500 ALL ENGINE. It
              includes included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT,
              4 REAR) Brake Pads.
            </h1>
            <button>
              includes included 4 (2 FRONT, 2 REAR) Brake Roters and 8 (4 FRONT,
              4 REAR) Brake Pads.
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={imagessss} alt={123} width={700} height={700} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={imagessss} alt={123} width={700} height={700} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={imagessss} alt={123} width={700} height={700} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={imagessss} alt={123} width={700} height={700} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.image}>
            <Image src={imagessss} alt={123} width={700} height={700} />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BrakeDetail;
