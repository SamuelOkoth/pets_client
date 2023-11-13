import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
// import Section from "../../Jobs/JobList2/Section";
import Popular from "./components/Popular";
import Fliter from "./components/Fliter";
import Sidebar from "./components/SideBar";
import Ad from "./components/Ad";
import Pagination from "./components/Pagination";
import HeroSwiper from "./components/HeroSwiper"
import {getAdsAsync, deleteAdsAsync} from '../../store/reducers/ads.reducer'
import { useTranslation } from "react-i18next";

const AdsList = () => {
  document.title = "Ads List | Petshelpful";
  const dispatch = useDispatch()
  const { i18n } = useTranslation();
  const ads = useSelector(state => state.ads.filteredAds);

  const fetchData = async () => {
    const response = await dispatch(getAdsAsync());
  };
  const deleteAd = async (id) => {
    // const response = await dispatch(deleteAdsAsync(id));
  };

  useEffect(()=>{
    fetchData()
  },[])
  

  

  // Function to check if the selected language is Arabic
  const isArabic = () => {
    return i18n.language === "ar";
  };

  return (
    <React.Fragment>
      {/* <Section /> */}
      <HeroSwiper isArabic={isArabic()}  />
      <section className="section">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                <Fliter />
                <Popular ads={ads}/>
                <Ad deleteAd={deleteAd} ads={ads}/>
                {/* <Pagination /> */}
              </div>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AdsList;
