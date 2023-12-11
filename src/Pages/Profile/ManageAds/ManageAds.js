import React from "react";
import { Container } from "reactstrap";
import AdsList from "./components/AdsList";
import Section from "./components/Section";
import Selected from "./components/Selected";

const ManageAds = () => {
  document.title = "Manage Ads | Petshelpful";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <AdsList />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ManageAds;
