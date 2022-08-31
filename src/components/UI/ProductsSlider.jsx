import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../UI/ProductCard";
import ProductCardViewAll from "../UI/ProductCardViewAll";

const ProductsSlider = ({ img, bgGray, promoDate }) => {
  return (
    <Swiper
      slidesPerView={2}
      centeredSlides={false}
      slidesPerGroupSkip={1}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 7,
        },
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard img={img} promoDate={promoDate} />
      </SwiperSlide>
      
      <SwiperSlide>
        <ProductCardViewAll />
      </SwiperSlide>
    </Swiper>
  );
};
export default ProductsSlider;
