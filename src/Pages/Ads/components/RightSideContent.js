import React, { useState } from "react";
import { Modal, ModalBody, Input, Label, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Import Images
import jobImages2 from "../../../assets/images/featured-job/img-02.png";

const RightSideContent = ({pet,addToFavorites}) => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  const {t} =useTranslation();
  return (
    <React.Fragment>
      <div className="side-bar ms-lg-4">
        <Card className="job-overview">
          <CardBody className="p-4">
            <h6 className="fs-17">{t('Ad Overview')}</h6>
            <ul className="list-unstyled mt-4 mb-0">
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-star-half-alt icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">{t('Age')}</h6>
                    <p className="text-muted mb-0">{pet.age} {t('Years')}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-location-point icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">{t('Location')}</h6>
                    <p className="text-muted mb-0"> {t(`countries.${pet.country}`)}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-phone-volume icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">{t('Phone Number')}</h6>
                    <p className="text-muted mb-0"> {pet.phone_number}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex mt-4">
                  <i className="uil uil-usd-circle icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">{t('Offered Price')}</h6>
                    <p className="text-muted mb-0">{pet.price}</p>
                  </div>
                </div>
              </li>
             
             
              <li>
                {/* <div className="d-flex mt-4">
                  <i className="uil uil-history icon bg-primary-subtle text-primary"></i>
                  <div className="ms-3">
                    <h6 className="fs-14 mb-2">Date Posted</h6>
                    <p className="text-muted mb-0">Posted 2 hrs ago</p>
                  </div>
                </div> */}
              </li>
            </ul>
            <div className="mt-3">
              <Link
                to="#sendMessage"
                onClick={openModal}
                className="btn btn-primary btn-hover w-100 mt-2"
              >
                {t('Message Now')}  <i className="uil uil-arrow-right"></i>
              </Link>
              <Link
                // to="/favoriteads"
                onClick={addToFavorites}
                className="btn btn-soft-warning btn-hover w-100 mt-2"
              >
                <i className="uil uil-bookmark"></i> {t('Add To Favourites')}
              </Link>
            </div>
          </CardBody>
        </Card>
      { pet.latitude && pet.longitude &&  (
        <div className="mt-4">
          <h6 className="fs-16 mb-3">{t('Ad Location')}</h6>
            <iframe
                width="100%"
                height="200"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBeBlcI_0OO_dK5bJKHSGKSfQUqDivb0Ro&center=${pet.latitude},${pet.longitude}&zoom=15`}
            ></iframe>
        </div>
        )}
        <div
          className="modal fade"
          id="sendMessage"
          tabIndex="-1"
          aria-labelledby="sendMessage"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <Modal isOpen={modal} toggle={openModal} centered>
              <ModalBody className="modal-body p-5">
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                  {t('Fast Message')}
                  </h5>
                </div>
                <div className="position-absolute end-0 top-0 p-3">
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              
                <div className="mb-3">
                  <Label for="messageControlTextarea" className="form-label">
                  {t('Message')}
                  </Label>
                  <textarea
                    className="form-control"
                    id="messageControlTextarea"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
               
                <button type="submit" className="btn btn-primary w-100">
                {t('Send Message')}
                </button>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightSideContent;
