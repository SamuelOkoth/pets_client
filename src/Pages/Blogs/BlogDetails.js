import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import BlogTitle from "./components/BlogTitle";
import BlogSwiper from "./components/BlogSwiper";
import BlogDescription from "./components/BlogDescription";
import BlogComments from "./components/BlogComments";
import BlogForm from "./components/BlogForm";
import RelatedBlogs from "./components/RelatedBlogs";
import BlogCategory from "./components/BlogCategory";
import PopularBlogs from "./components/PopularBlogs";
import Tags from "./components/Tags";
import SocialConnect from "./components/SocialConnect";
import { useTranslation } from "react-i18next";
const BlogDetails = () => {
  const { title } = useParams();
  const {t} = useTranslation();
  document.title = `Blog Details - ${title}`;
  const [blogData, setBlogData] = useState(null);
  const currentURL = window.location.href;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.petshelpful.com/api/v1/posts/${title}`);
        
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
  }, [title]);

  console.log(blogData);

  return (
    <React.Fragment>
      <BlogTitle />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-post">
              {blogData && blogData.featured_image ? (
                <img
                  src={blogData.featured_image}
                  alt=""
                  className="img-fluid rounded-3"
                />
              ) : (
                <p>No featured image available</p>
              )}
                   <ul className="list-inline mb-0 mt-3 text-muted">
    
                    <li className="list-inline-item">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <i className="uil uil-calendar-alt"></i>
                        </div>
                        <div className="ms-2">
                        {blogData && blogData.created_at && (
                            <p className="mb-0">{blogData.created_at}</p>
                          )}
                        </div>
                      </div>
                    </li>
                  </ul>
                <div className="mt-4">
                  {blogData && blogData.title && (
                            <h5>{blogData.title}</h5>
                  )}
                  
                  {blogData && blogData.content && (
                 
                        <div className="text-muted" dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
               
                   )}
                  
                  
                  <ul className="blog-social-menu list-inline mb-0 text-end">
                    <li className="list-inline-item">
                      <b>{t("share_post")}:</b>
                    </li>
                    <li className="list-inline-item">
                      <Link to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentURL)}`} target="_blank" rel="noopener noreferrer" className="social-link bg-primary-subtle text-primary">
                        <i className="uil uil-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentURL)}`} target="_blank" rel="noopener noreferrer" className="social-link bg-success-subtle text-success">
                        <i className="uil uil-whatsapp"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentURL)}`} target="_blank" rel="noopener noreferrer" className="social-link bg-blue-subtle text-blue">
                        <i className="uil uil-linkedin-alt"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={`mailto:?subject=Check%20out%20this%20post&body=${encodeURIComponent(currentURL)}`} target="_blank" rel="noopener noreferrer" className="social-link bg-danger-subtle text-danger">
                        <i className="uil uil-envelope"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
              {blogData && blogData.related_posts && (
                <PopularBlogs related_posts={blogData.related_posts} />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
