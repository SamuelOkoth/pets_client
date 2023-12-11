import React, { useEffect, useState } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogCard = () => {
  const { t } = useTranslation();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.petshelpful.com/api/v1/posts");
        
        if (response.ok) {
          const data = await response.json();
         
          setBlogData(data);
        } else {
          console.error("Failed to fetch blog data");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);


  console.log(blogData);
  return (
    <React.Fragment>
      <Row>
        {blogData.map((blogTextDetails, key) => (
          <Col lg={6} className="mb-4" key={key}>
            <Card className="blog-grid-box p-2">
              <img
                src={blogTextDetails.featured_image}
                alt=""
                className="img-fluid"
              />
              <CardBody>
                <ul className="list-inline d-flex justify-content-between mb-3">
                  <li className="list-inline-item">
                    <p className="text-muted mb-0">
                      {blogTextDetails.created_at}
                    </p>
                  </li>
                </ul>
                <Link to="/blogdetails" className="primary-link">
                  <h6 className="fs-17">{blogTextDetails.title}</h6>
                </Link>
                <div className="text-muted">
                  {blogTextDetails.content
                    .replace(/<\/?[^>]+(>|$)/g, '') // Remove HTML tags
                    .split(' ') // Split the text into words
                    .slice(0, 20) // Take the first three words
                    .join(' ')} {/* Join the words back into a string */}
                </div>
                <div>
                  <Link to={`/blogdetails/${encodeURIComponent(blogTextDetails.title)}`} className="form-text text-primary">
                    {t("read_more")} <i className="uil uil-angle-right-b"></i>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default BlogCard;
