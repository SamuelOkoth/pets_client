import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

// Import Hero images
import heroImage1 from "../../../assets/images/home/hero-image-1.jpg";
import heroImage2 from "../../../assets/images/home/hero-image-2.jpg";
import heroImage3 from "../../../assets/images/home/hero-image-3.jpg";
import heroImage4 from "../../../assets/images/home/hero-image-4.jpg";

const HeroSwiper = ({ isArabic }) => {
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

  const flickityRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity when the component mounts
    flickityRef.current = new Flickity(".carousel", {
      wrapAround: true,
      autoPlay: 3000,
      adaptiveHeight: true

      // Other Flickity options...
    });

    // Change language direction dynamically
    flickityRef.current.direction = isArabic ? "rtl" : "ltr";

    return () => {
      // Destroy Flickity when the component unmounts
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, [isArabic]);

  return (
    <React.Fragment>
      <div className="custom-container container-fluid">
        <div className="carousel">
          {heroSwiper.map((heroSwiperDetails, key) => (
              <img
                src={heroSwiperDetails.heroImage}
                alt=""
                className="scarousel-cell"
              />
           
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSwiper;