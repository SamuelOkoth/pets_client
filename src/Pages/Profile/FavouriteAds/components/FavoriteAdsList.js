import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Modal, ModalBody, Row } from "reactstrap";

import Pagination from "./Pagination";

//Import Images

import adImage1 from "../../../../assets/images/pet-ad.jpg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { axiosClient } from "../../../../config/axiosConfig";

const JobListing = () => {
  const [petAdList, setPetAdList] = useState([]);
  const { t } = useTranslation();
  //Delete Modal
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

  useEffect(() => {
    fetchFavPets();
  }, []);

  const fetchFavPets = async () => {
    try {
      const response = await axiosClient.get(`/favourite_ads`).then((response) => response.data);
      setPetAdList(response);
      console.log(response);
    } catch (error) {
      console.error(error.message)
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {petAdList[0] && petAdList.map((petAdDetail, key) => (
            <Card className="job-box card mt-4" key={key}>
              <CardBody className="p-4">
                <Row className="align-items-center">
                  <Col md={2}>
                    <div className="text-center mb-4 mb-md-0">
                      <Link to={"/ads/"+ petAdDetail.ad_id}>
                        <img
                          src={petAdDetail.pet_img_url}
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
                        <Link to="/AdDetails" className="text-dark">
                          {petAdDetail.ad.name}
                        </Link>
                      </h5>
                      <p className="text-muted fs-14 mb-0">
                        {petAdDetail.user.email}
                      </p>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="d-flex mb-2">
                      <div className="flex-shrink-0">
                        <i className="mdi mdi-map-marker text-primary me-1"></i>
                      </div>
                      <p className="text-muted mb-0">{petAdDetail.ad.country}</p>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="d-flex mb-0">
                      <div className="flex-shrink-0">
                        {/* <i className="uil uil-clock-three text-primary me-1"></i> */}
                        <i className="uil uil-wallet text-primary me-1"></i>
                      </div>
                      <p className="text-muted mb-0"> {petAdDetail.ad.price}</p>
                    </div>
                  </Col>
                  <Col md={2} className="align-self-center">
                    <ul className="list-inline mt-3 mb-0">
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View More"
                      >
                        <Link
                          to={"/ads/"+ petAdDetail.ad_id}
                          className="avatar-sm bg-success-subtle text-success d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="mdi mdi-eye"></i>
                        </Link>
                      </li>
                      {/* <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <Link
                          onClick={openModal}
                          to="#"
                          className="avatar-sm bg-danger-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </Link>
                      </li> */}
                    </ul>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
        {/* <Pagination /> */}
      </Row>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {"delete_ads"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={openModal}
              ></button>
            </div>
            <ModalBody>
              <div>
                <h6 className="text-danger">
                  <i className="uil uil-exclamation-triangle"></i>
                  {t("delete_ad_subtitle")}
                </h6>
                <p className="text-muted">{t("delete_ad_text")}</p>
              </div>
            </ModalBody>
            <div className="modal-footer">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary btn-sm"
              >
                {t("cancel")}
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                {t("yes_delete")}
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobListing;
