import { useTranslation } from "react-i18next";
import React, { useEffect, useState, useRef  } from "react";
import { Link } from "react-router-dom";
import { Col, Label, Row, Modal, ModalBody, Input } from "reactstrap";
import { useSelector, useDispatch  } from "react-redux";
import timeAgo from "../../../utils/timeAgo";
import { GetUserProfileAsync } from "../../../../src/store/reducers/auth.reducer";
import { sendMessageAsync } from "../../../../src/store/reducers/messages.reducer";


import { toast } from "react-toastify";
const Ad = ({deleteAd, ads}) => {
  const [adIdInModal, setAdIdInModal] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth?.token);
  const { t, i18n  } = useTranslation();
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);
  // const openModal = () => setModal(!modal);

  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);

  const language = i18n.language;
  
  useEffect(() => {
    if (token) {
      getProfileDat()
    }
 }, []);

 const getProfileDat = async (event) => {
   setLoading(true);
   try {
     const response = await dispatch(GetUserProfileAsync());
     setProfileData(response)
   } catch (error) {
     toast.error(error?.response?.data?.error);
   } finally {
     setLoading(false);
   }
 }


 const openModal = (adID) => {
  setAdIdInModal(adID); // Set the adID when the modal is opened
  setModal(true);
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const modalForm = document.getElementById("modalForm");

  if (modalForm) {
    const formData = new FormData(modalForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    setLoading(true);
    setTimeout(() => {
      // Reload the page after the delay
      setModal(false);
    }, 1000);
    try {
      const sendData = {
        chat: formDataObject,
      };

      await dispatch(sendMessageAsync(sendData));
      toast.success("Message sent successfully");
      setModal(false);
      // Additional logic if needed
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle errors if needed
    } finally {
      setLoading(false);
    }
  }
};


  return (
    <React.Fragment>
      <div>
        {
          !ads[0] && <h5 style={{ border: "2px solid black", padding: "2rem", borderRadius: "5px" }}>No ads found!</h5>
        }
        {ads && ads.length > 0 && ads.map((petAdDetail, key) => (
          <div
            key={key}
            className={
              // petAdDetail.addclassNameBookmark === true
              //   ? "job-box bookmark-post card mt-4"
              //   : "job-box card mt-4"
              "job-box bookmark-post card mt-4"
            }
          >
            <div className="favorite-icon">
              <Link to="#">
                <i className="uil uil-heart-alt fs-18"></i>
              </Link>
            </div>
            {/* <div className="delete-icon">
              <div onClick={() => deleteAd(petAdDetail.id)}>
                <i className="uil uil-trash-alt fs-18"></i>
              </div>
            </div> */}
            <div className="p-4">
              <Row className="align-items-center">
                <Col md={2}>
                  <div className="text-center mb-4 mb-md-0">
                    <Link to={"/ads/"+ petAdDetail.id}>
                      <img
                        src={petAdDetail.pet_image_url}
                        alt=""
                        className="img-fluid rounded-3"
                        style={{ height: "95px" }}
                      />
                    </Link>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="mb-2 mb-md-0">
                    <h5 className="fs-18 mb-0">
                      <Link to={"/ads/"+ petAdDetail.id} className="text-dark">
                        {petAdDetail.name}
                      </Link>
                    </h5>
                    <p className="text-muted fs-14 mb-0">
                      {/* {petAdDetail.email} */}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {t(`countries.${petAdDetail.country}`)}
                      
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div className="d-flex mb-0">
                    <div className="flex-shrink-0">
                      <i className="uil uil-clock-three text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {" "}
                      {petAdDetail?.updated_at && (
                        <>
                         
                          {timeAgo(petAdDetail.updated_at, language)}
                        </>
                      )}
                      
                    </p>
                  </div>
                </Col>

                <Col md={2}>
                  <div className="d-flex mb-0">
                    <div className="flex-shrink-0">
                      {/* <i className="uil uil-clock-three text-primary me-1"></i> */}
                      <i className="uil uil-wallet text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {" "}
                      {petAdDetail.ad_price}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="p-3 bg-light">
              <Row className="justify-content-between">
                <Col md={4}>
                  <div>
                    <p className="text-muted mb-0">
                      <span className="text-dark">{t("Age")} :</span>
                      {petAdDetail.age}
                    </p>
                  </div>
                </Col>
                <Col lg={2} md={3}>
                  <div>
                    <Link
                      to="#sendMessage"
                      onClick={() => openModal(petAdDetail.id)}
                      className="primary-link"
                    >
                      {t("Message")} <i className="mdi mdi-chevron-double-right"></i>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}
        <div
          className="modal fade"
          id="sendMessage"
          tabIndex="-1"
          aria-labelledby="sendMessage"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <Modal isOpen={modal} toggle={() => setModal(!modal)} centered>
              <ModalBody className="modal-body p-5">
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    {t("Fast Message")}
                  </h5>
                </div>
                <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={() => setModal(!modal)}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                </div>
                <form id="modalForm">
                  <div className="mb-3">
                    <Label for="messageControlTextarea" className="form-label">
                    {t("Message")}
                    </Label>
                    <textarea
                      className="form-control"
                      id="messageControlTextarea"
                      rows="4"
                      name="body"
                      placeholder={t('form_plac_message')}
                    ></textarea>
                  </div>
                  <Input type="hidden" name="adId" value={adIdInModal} />
                  <Input type="hidden" name="senderId" value={profileData.id} />
                
                  <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>
                    {t("Send Message")}
                  </button>
                </form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ad;
