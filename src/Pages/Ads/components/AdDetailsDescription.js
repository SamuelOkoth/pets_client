import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

//Import Images
import { Link } from "react-router-dom";
import AdSwiper from "./AdSwiper";
import AdImage3 from "../../../assets/images/ads/ad-image-3.jpg";
import { useTranslation } from "react-i18next";

const JobDetailsDescription = ({ pet }) => {
  const {t} =useTranslation();
  const { i18n } = useTranslation();
   // Function to check if the selected language is Arabic
  const isArabic = () => {
    return i18n.language === "ar";
  };

  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        <div className="pet-image-header" >
          <AdSwiper pet={pet} isArabic={isArabic} />
        </div>
        <CardBody className="p-4">
          <div>
            <Row>
              <Col md={8}>
                <h5 className="mb-1">{pet.name}</h5>
                <ul className="list-inline text-muted mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-account"></i> {pet.email}
                  </li>
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-heart-alt"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="mt-4">
            <h5 className="mb-3">{t('Ad Description')}</h5>
            <div className="job-detail-desc">
              <p className="text-muted mb-0">{pet.description}</p>
            </div>
          </div>

          <div className="mt-4 pt-3">
          <ul className="list-inline mb-0">
              <li className="list-inline-item mt-1">{t('Share This Ad')}:</li>
              <li className="list-inline-item mt-1">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  className="btn btn-primary btn-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-facebook-f"></i> {t('Facebook')}
                </a>
              </li>
              <li className="list-inline-item mt-1">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                  className="btn btn-danger btn-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-twitter"></i> {t('Twitter')}
                </a>
              </li>
              <li className="list-inline-item mt-1">
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}`}
                  className="btn btn-success btn-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="uil uil-linkedin-alt"></i> {t('LinkedIn')}
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
