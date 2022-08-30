import { Carousel } from "flowbite-react";
import bannerImg1 from "../../img/webBanner1.png";
import bannerImg2 from "../../img/webBanner2.png";
import mobileBannerImg1 from "../../img/mobileBanner1.png";
import mobileBannerImg2 from "../../img/mobileBanner2.png";

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
    <div className="h-[200px] sm:h-[420px] mx-4 md:mx-8">
      <Carousel slideInterval={5000} indicators={false}>
        <img src={slideImgs[0].src} alt="..." />
        <img src={slideImgs[1].src} alt="..." />
      </Carousel>
    </div>
  );
};
export default MainImageSlider;
