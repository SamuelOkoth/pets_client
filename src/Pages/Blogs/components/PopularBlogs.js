import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PopularBlogs = ({ related_posts }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">{t("popular_post")}</h6>
        </div>
        <ul className="widget-popular-post list-unstyled my-4">
          {related_posts.map((post, key) => (
            <li
              className="d-flex mb-3 align-items-center pb-3 border-bottom"
              key={key}
            >
              <img
                src={post.featured_image}
                alt=""
                className="widget-popular-post-img rounded"
              />
              <div className="flex-grow-1 text-truncate ms-3">
                <Link to={`/blog-details/${post.title}`} className="text-dark">
                  {post.title}
                </Link>
                <span className="d-block text-muted fs-14">
                  {post.created_at}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default PopularBlogs;