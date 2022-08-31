import bannerImg1 from "../../img/webBanner1.png";
import bannerImg2 from "../../img/webBanner2.png";
import mobileBannerImg1 from "../../img/mobileBanner1.png";
import mobileBannerImg2 from "../../img/mobileBanner2.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MainImageSlider = () => {
  const slideImgs =
    window.innerWidth > 640
      ? [
          {
            src: bannerImg1,
            alt: "slide1",
          },
          {
            src: bannerImg2,
            alt: "slide2",
          },
        ]
      : [
          {
            src: mobileBannerImg1,
            alt: "slide1",
          },
          {
            src: mobileBannerImg2,
            alt: "slide2",
          },
        ];
  return (
    <div className="max-h-[307px] sm:max-h-[420px] mx-4 md:mx-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slideImgs[0].src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImgs[1].src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImgs[0].src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImgs[1].src} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImgs[0].src} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default MainImageSlider;
