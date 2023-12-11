import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  const { t } = useTranslation();

  const footer = [
    {
      id: 1,
      title: t("company"),
      menu: [
        {
          id: 1,
          link: "/about",
          subTitle: t("about"),
        },
        {
          id: 2,
          link: "/contact",
          subTitle: t("contact"),
        },

        {
          id: 3,
          link: "/blogs",
          subTitle: t("blog"),
        },
      ],
    },
    {
      id: 2,
      title: t("for_ads"),
      menu: [
        {
          id: 1,
          link: "/",
          subTitle: t("browser_pets"),
        },

        {
          id: 2,
          link: "/favoriteads",
          subTitle: t("favorite_ads"),
        },
      ],
    },

    {
      id: 3,
      title: t("support"),
      menu: [
        {
          id: 1,
          link: "/contact",
          subTitle: t("help-center"),
        },
        {
          id: 2,
          link: "/faqs",
          subTitle: t("faqs"),
        },
        {
          id: 3,
          link: "/termandconditions",
          subTitle: t("term_&_conditions"),
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <section className="bg-footer">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="footer-item mt-4 mt-lg-0 me-lg-5">
                <h4 className="text-white mb-4">Petshelpful</h4>
                <p className="text-white-50">
                {t("about_text")}
                </p>
               
              </div>
            </Col>
            {footer.map((footerdetails, key) => (
              <Col lg={3} xs={6} key={key}>
                <div className="footer-item mt-4 mt-lg-0">
                  <p className="fs-16 text-white mb-4">{footerdetails.title}</p>
                  {(footerdetails.menu || []).map((menuInner, key) => (
                    <ul className="list-unstyled footer-list mb-0" key={key}>
                      <li>
                        <Link to={menuInner.link}>
                          <i className="mdi mdi-chevron-right"></i>{" "}
                          {menuInner.subTitle}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={6}>
              <p className="text-white-50 text-left mb-0">
                
                2023@petshelpful
              </p>
            </Col>
            <Col lg={6}>
                {/* add ul with links to social media */}
              <ul className="list-unstyled social-icon text-end mb-0">
                <li className="list-inline-item">
                  <Link to="https://www.facebook.com/Petshelpful" className="rounded" target="_blank">
                     <FaFacebookF />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://www.instagram.com/pets_helpful" className="rounded" target="_blank">
                    <FaInstagram />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://www.linkedin.com/company/petshelpful/" className="rounded" target="_blank">
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://tiktok.com/@petshelpful_" className="rounded">
                     <FaTiktok />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://api.whatsapp.com/send?phone=966563228055" className="rounded" target="_blank">
                    <FaWhatsapp />
                    
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
