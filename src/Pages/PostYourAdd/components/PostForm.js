import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// Components
import { createAdsAsync } from "../../../store/reducers/ads.reducer";
import { countryOptions } from "../../../../src/commonComponents/options"

const PostForm = () => {
  const {t} = useTranslation();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
 // State for latitude and longitude
 const [latitude, setLatitude] = useState(null);
 const [longitude, setLongitude] = useState(null);
 // Constants for Google Maps initialization
 const DEFAULT_LATITUDE = 0; // Set your initial latitude
 const DEFAULT_LONGITUDE = 0; // Set your initial longitude
 const [userCountry, setUserCountry] = useState("Loading...");
 // code to handle the map
 useEffect(() => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBeBlcI_0OO_dK5bJKHSGKSfQUqDivb0Ro&libraries=places`;
  script.async = true;
  script.defer = true;

  script.onload = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE }, // Set initial map center.
      zoom: 12, // Set initial zoom level.
    });

    const input = document.createElement("input");
    input.type = "text";
    input.id = "locationInput";
    input.placeholder = "Search for a location";
    document.body.appendChild(input);

    const searchBox = new window.google.maps.places.SearchBox(input);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });

    let marker;

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      const place = places[0];
      map.setCenter(place.geometry.location);

      if (marker) {
        marker.setMap(null);
      }

      marker = new window.google.maps.Marker({
        map,
        position: place.geometry.location,
      });

      const newLatitude = place.geometry.location.lat();
      const newLongitude = place.geometry.location.lng();

      setLatitude(newLatitude);
      setLongitude(newLongitude);
    });
  };

  document.head.appendChild(script);

  return () => {
    const input = document.getElementById("locationInput");
    if (input) {
      document.body.removeChild(input);
    }
  };
}, []);

useEffect(() => {
  // Fetch user's IP address information
  fetch("https://ipinfo.io?token=05eab31960567f")
    .then(response => response.json())
    .then(data => {
      setUserCountry(data.country || "Unknown");
    })
    .catch(error => {
      console.error("Error fetching IP address information:", error);
      setUserCountry("Unknown");
    });
}, []);

  const handleAdSCreate = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    setLoading(true);
    try {
      const sendData = {
        ad:formDataObject
      }
      await dispatch(createAdsAsync(sendData));
      toast.success("Ad created successfully");
      // navigate("/signin");
    } catch (error) {
      function displayErrorToasts(errors) {
        errors.forEach((error, index) => {
          toast.error(error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, // Adjust as needed
            closeButton: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            toastId: index,
          });
        });
      }
      console.log("Error On Ad Form:", error?.response?.data?.error);
      displayErrorToasts(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  }
  return (
   <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="bg-primary-subtle text-primary p-3">
                <h5 className="mb-0 fs-17">{t("post_ad_heading")}</h5>
              </div>
            </Col>
          </Row>
          {/* <Form onSubmit={handleSubmit(onSubmit)} className="auth-form"></Form> */}
          <form ref={formRef} action="#" className="job-post-form shadow mt-4">
            <div className="job-post-content box-shadow-md rounded-3 p-4">
              <Row className="row">
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="petName" className="form-label">
                      {t("pet_name_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="jobtitle"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="petDescription" className="form-label">
                      {t("pet_description_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <textarea
                      className="form-control"
                      id="petDescription"
                      rows="3"
                      placeholder={t("pet_description_placeholder")}
                      name="description"
                    ></textarea>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="petGender" className="form-label">
                      {t("pet_gender_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <select
                      className="form-select"
                      id="petGender"
                      name="gender"
                    >
                      <option value="" disabled selected>
                        {t("select_pet_gender_placeholder")}
                      </option>
                      <option value="male">{t("male")}</option>
                      <option value="female">{t("female")}</option>
                    </select>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="petAge" className="form-label">
                      {t("pet_age_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="petAge"
                      placeholder={t("pet_age_placeholder")}
                      name="age"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="email" className="form-label">
                      {t("email_label")} 
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder={t("email_placeholder")}
                      name="email"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="phoneNumber" className="form-label">
                      {t("phone_number_label")} 
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="phoneNumber"
                      placeholder={t("phone_number_placeholder")}
                      name="phone_number"
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="petType" className="form-label">
                      {t("pet_type_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="petType"
                      placeholder={t("pet_type_placeholder")}
                      name="pet_type"
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="adType" className="form-label">
                      {t("ad_type_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <select
                      className="form-select"
                      id="adType"
                      aria-label="Default select example"
                      name="ad_type"
                    >
                       
                        <option value="Missing">{t("ad_type_missing")}</option>
                        <option value="Temporary adoption">{t("ad_type_temporary_adoption")}</option>
                        <option value="Mating">{t("ad_type_mating")}</option>
                        <option value="Free rescue">{t("ad_type_free_rescue")}</option>
                        <option value="Sale">{t("ad_type_sale")}</option>
                        <option value="Adoption">{t("ad_type_adoption")}</option>


                    </select>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-4">
                    <Label htmlFor="petPrice" className="form-label">
                      {t("pet_price_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="petPrice"
                      placeholder={t("pet_price_placeholder")}
                      name="price"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="country" className="form-label">
                      {t("country_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                   <select
                    className="form-select"
                    id="country"
                    aria-label="Default select example"
                    name="country"
                  >
                    {countryOptions.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  </div>
                </Col>
                <Col lg={12}>
                    <div id="map" className="mb-4" style={{ height: "400px", width: "100%" }}></div>
                    <input type="hidden" name="latitude" value={latitude} />
                    <input type="hidden" name="longitude" value={longitude} />
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label htmlFor="city" className="form-label">
                      {t("city_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder={t("city_placeholder")}
                      name="city"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="mb-4">
                    <Label htmlFor="zipcode" className="form-label">
                      {t("zipcode_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      placeholder={t("zipcode_placeholder")}
                      name="zipcode"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="mb-4">
                    <Label htmlFor="petImages" className="form-label">
                      {t("pet_images_label")} <span style={{color: "red"}}>*</span>
                    </Label>
                    <Input
                      type="file"
                      className="form-control"
                      id="petImages"
                      name="pet_image"
                    />
                    <input type="hidden" name="userCountry" id="userCountryInput" value={userCountry} />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="d-flex flex-wrap align-items-start gap-1 justify-content-end">
                    <Link to="/myprofile" className="btn btn-success">
                      {t("back_button")}
                    </Link>
                    <Link to="#" onClick={handleAdSCreate} className="btn btn-primary">
                      {t("submit_button")}{" "} <i className="mdi mdi-send"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PostForm;
