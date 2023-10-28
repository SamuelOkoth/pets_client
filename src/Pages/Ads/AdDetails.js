import React, {useState,useEffect} from "react";
import { Col, Container, Row } from "reactstrap";
import AdDetailsDescription from "./components/AdDetailsDescription";
import RelatedAd from "./components/RelatedAd";
import RightSideContent from "./components/RightSideContent";
import Section from "./components/Section";
import{ useParams }from "react-router-dom"
import {axiosClient} from "../../config/axiosConfig"
const AdDetails = () => {
  const [adDetails, setAdDetails] = useState([])
  document.title = "Ad Detail | Ad Title";
  const {id} = useParams()
  useEffect(()=>{
    getAdsDetails()
  },[id])
  const getAdsDetails = async ()=>{
    try{
      const response = await axiosClient.get(`api/v1/ads/${id}}`).then((response) => response.data);
      setAdDetails(response)
      console.log(response)
    }catch(error){
      console.error(error.message)
    }
  }
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              <AdDetailsDescription pet={adDetails}/>
              {/* <RelatedAd /> */}
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <RightSideContent pet={adDetails}/>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AdDetails;
