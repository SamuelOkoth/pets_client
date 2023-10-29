import React from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Row, Input, Label } from "reactstrap";

//Import Images

import contactImage from "../../../assets/images/contact.png";
import { useTranslation } from "react-i18next";
const ContactContent = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg={6}>
              <div className="section-title mt-4 mt-lg-0">
                <h3 className="title">{t("get_in_touch")}</h3>
               
                <Form
                  method="post"
                  className="contact-form mt-4"
                  name="myForm"
                  id="myForm"
                >
                  <span id="error-msg"></span>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="nameInput" className="form-label">
                          {t("form_name")}
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder={t("form_plac_name")}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                         {t("form_email")}
                        </Label>
                        <Input
                          type="email"
                          className="form-control"
                          id="emaiol"
                          name="email"
                          placeholder={t("form_plac_email")}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <Label htmlFor="subjectInput" className="form-label">
                          {t("form_subject")}
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder={t("form_plac_subject")}
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="meassageInput" className="form-label">
                          {t("form_message")}
                        </Label>
                        <textarea
                          className="form-control"
                          placeholder={t("form_plac_message")}
                          name="comments"
                          rows="3"
                        ></textarea>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-end">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                    >
                  
                      {t("form_button")} <i className="uil uil-message ms-1"></i>
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={5} className="ms-auto order-first order-lg-last">
              <div className="text-center">
                <img src={contactImage} alt="" className="img-fluid" />
              </div>
              <div className="mt-4 pt-3">
             
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-envelope"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0 email">info@petshelpful.com</p>
                  </div>
                </div>
                <div className="d-flex text-muted align-items-center mt-2">
                  <div className="flex-shrink-0 fs-22 text-primary">
                    <i className="uil uil-phone-alt"></i>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className="mb-0 phone ">+966 56 322 8055</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactContent;
