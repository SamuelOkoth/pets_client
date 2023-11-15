import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

const AdSwiper = ({ pet, isArabic }) => {
  const flickityRef = useRef(null);
  console.log(pet)
  useEffect(() => {
    // Initialize Flickity when the component mounts
    flickityRef.current = new Flickity(".carousel-pet", {
      wrapAround: true,
      autoPlay: 3000,
      // adaptiveHeight: true,
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
        <div className="carousel-pet">
        {pet.pet_image_url && (
          <div className="carousel-cell">
            <img
              src={pet.pet_image_url}
              alt="Main Pet Image"
              className="pet-slider"
            />
          </div>
        )}

        {pet.additional_images && pet.additional_images.length > 0 && (
          <>
            {pet.additional_images.map((imageUrl, key) => (
              <div key={key} className="carousel-cell">
                <img
                  src={imageUrl}
                  alt={`Image ${key}`}
                  className="pet-slider"
                />
              </div>
            ))}
          </>
        )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdSwiper;