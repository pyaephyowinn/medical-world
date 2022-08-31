import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import webAd from "../../img/webAd1.png";
import mobileAd from "../../img/mobileAd1.png";

const SecondarySlider = () => {
  const slideImg = window.innerWidth > 640 ? webAd : mobileAd;
  return (
    <div className="bg-white grid grid-cols-12 p-4 sm:py-8 sm:px-0">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slideImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slideImg} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default SecondarySlider;
