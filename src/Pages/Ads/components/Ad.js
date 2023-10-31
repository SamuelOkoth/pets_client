

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Label, Row, Modal, ModalBody } from "reactstrap";
import { useSelector } from "react-redux";
import timeAgo from "../../../utils/timeAgo";

const Ad = ({deleteAd, ads}) => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);
  return (
    <React.Fragment>
      <div>
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
                      {petAdDetail.email}
                    </p>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <i className="mdi mdi-map-marker text-primary me-1"></i>
                    </div>
                    <p className="text-muted mb-0">
                      {petAdDetail.country}
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
                      {timeAgo(petAdDetail.updated_at)}
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
                      <span className="text-dark">Age :</span>
                      {petAdDetail.age}
                    </p>
                  </div>
                </Col>
                <Col lg={2} md={3}>
                  <div>
                    <Link
                      to="#sendMessage"
                      onClick={openModal}
                      className="primary-link"
                    >
                      Message <i className="mdi mdi-chevron-double-right"></i>
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
            <Modal isOpen={modal} toggle={openModal} centered>
              <ModalBody className="modal-body p-5">
                <div className="text-center mb-4">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Fast Message
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
                    Message
                  </Label>
                  <textarea
                    className="form-control"
                    id="messageControlTextarea"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
               
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ad;
