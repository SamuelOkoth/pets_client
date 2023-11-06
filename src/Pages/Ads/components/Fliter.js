import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Row } from "reactstrap";
import CountryOptions from "./CountryOptions";
import Type from "./Type";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { complexSearch, searchAds } from "../../../store/reducers/ads.reducer";
const Fliter = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAds(searchValue));
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(complexSearch(type.value, country.value))
  };

  return (
    <React.Fragment>
      <div className="job-list-header">
        <form onSubmit={submit}>
          <Row className="g-2">
            <Col lg={3} md={6}>
              <div className="filler-job-form">
                <i className="uil uil-search"></i>
                <Input
                  type="search"
                  className="form-control filter-input-box"
                  id="exampleFormControlInput1"
                  placeholder="Search for ads .. "
                  style={{ marginTop: "-10px" }}
                  onChange={handleInputChange}
                />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="filler-job-form">
                <i className="uil uil-location-point"></i>
                <CountryOptions setCountry={setCountry} />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="filler-job-form">
                {/* <i className="uil uil-clipboard-notes"></i> */}
                <i className="uil uil-exchange"></i>
                <Type setType={setType} />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <button type="submit" className="btn btn-primary w-100">
                <i className="uil uil-filter"></i> {t("filter")}
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Fliter;
