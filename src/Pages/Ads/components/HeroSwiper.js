import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

//swiper css
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//Import Hero images
import heroImage1 from "../../../assets/images/home/hero-image-1.jpg";
import heroImage2 from "../../../assets/images/home/hero-image-2.jpg";
import heroImage3 from "../../../assets/images/home/hero-image-3.jpg";
import heroImage4 from "../../../assets/images/home/hero-image-4.jpg";

const HeroSwiper = () => {
  const heroSwiper = [
    {
      id: 1,
      heroImage: heroImage1,
    },
    {
      id: 2,
      heroImage: heroImage2,
    },
    {
      id: 3,
      heroImage: heroImage3,
    },
    {
      id: 4,
      heroImage: heroImage4,
    },
  ];

  SwiperCore.use([Autoplay, Pagination]);
  return (
    <React.Fragment>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        autoHeight={true}
        pagination={{ clickable: true }}
       
          className="swiper-main"
      >
        <div
          className="swiper-wrapper"
         
        >
          {(heroSwiper || []).map((heroSwiperDetails, key) => (
            <SwiperSlide key={key}>
              <img
                src={heroSwiperDetails.heroImage}
                alt=""
                className=" swiper-img"
               
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </React.Fragment>
  );
};

export default HeroSwiper;
