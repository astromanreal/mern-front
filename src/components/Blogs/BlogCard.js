import React from "react";
import "./Blogcard.css";
import { Link } from "react-router-dom";

export default function BlogCard({ id, title, author, img, desc }) {
  return (
    <>
      <div class="blog-main-card">
        <div class="blog-main-content">
          <div class="blog-main-header">
            <span>Article on</span>
            <span>29-June-2023</span>
          </div>
          <Link to={`/blog-details/${id}`}>
            <p class="blog-main-heading">{title}</p>
          </Link>
          <div class="blog-main-categories">
            <span>temple</span>
            <span>Jain</span>
          </div>
        </div>
        <img class="blog-main-image" src={img} alt="not found" />
        <div class="blog-main-footer">by {author}</div>
      </div>
    </>
  );
}
