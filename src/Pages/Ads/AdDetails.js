import React, {useState,useEffect} from "react";
import { Col, Container, Row } from "reactstrap";
import AdDetailsDescription from "./components/AdDetailsDescription";
import RelatedAd from "./components/RelatedAd";
import RightSideContent from "./components/RightSideContent";
import Section from "./components/Section";
import{ useParams }from "react-router-dom"
import {axiosClient} from "../../config/axiosConfig"
import { useDispatch, useSelector } from "react-redux";
import { GetUserProfileAsync } from "../../store/reducers/auth.reducer";
import { toast } from "react-toastify";
import { createFavAdsAsync } from "../../store/reducers/ads.reducer";
const AdDetails = () => {
  const [adDetails, setAdDetails] = useState([])
  const [userId, setUserId] = useState([])
  document.title = "Ad Detail | Ad Title";
  const {id} = useParams()
  const token = useSelector((state) => state.auth?.token);

  useEffect(()=>{
    getAdsDetails()
  },[id])
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (token) {
      getProfileDat()
    }
 }, []);

 const getProfileDat = async (event) => {
   try {
     const response = await dispatch(GetUserProfileAsync());
     setUserId(response.id)
   } catch (error) {
     toast.error(error?.response?.data?.error);
   } 
 }
  const getAdsDetails = async ()=>{
    try{
      const response = await (`api/v1/ads/${id}}`).then((response) => response.data);
      setAdDetails(response)
      console.log(response)
    }catch(error){
      console.error(error.message)
    }
  }
  const addToFavorites = async() => {
    try {
      if(userId && id){
        const res = await fetch("https://www.petshelpful.com/favourite_ads", {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: parseInt(userId), ad_id: parseInt(id) }),
        });
        if(res.ok){
          toast("Added to favorites successfully")
          window.location("/favoriteads")
        }
      }
    } catch (error) {
      toast.error(error.message)
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
              {adDetails && <RightSideContent pet={adDetails} addToFavorites={addToFavorites}/>}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AdDetails;
