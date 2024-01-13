import React, { useEffect, useState } from "react";
import "./Slider.css";
import axios from "axios";
import BlogCard from "../Blogs/BlogCard";

export default function Slider() {
  // for all blog related to the jainism
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const { data } = await axios.get("https://shikharji-api.vercel.app/jainism");
        if (data?.success) {
          setBlogs(data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllBlogs();
  }, []);
  return (
    <>
      <div className="slider" x-data="{start: true, end: false}">
        <h1 className="title">Blogs of Jainism</h1>
        <div className="slider__content" x-ref="slider">
          {blogs &&
            blogs.map((blog) => {
              return (
                <BlogCard
                  id={blog._id}
                  title={blog.title}
                  desc={blog.description}
                  author={blog.author}
                  img={blog.image}
                  date={blog.createdAt}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
