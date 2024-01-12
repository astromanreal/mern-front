import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

export default function Blogpage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    
    // get All blogs
    const getAllBlogs = async () => {
      try {
         const apiUrl = process.env.REACT_APP_API_BASE_URL;
        const { data } = await axios.get(`${apiUrl}/blog`);
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
      <div className="flex-wrap my-container">
        {blogs.map((blog) => {
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
    </>
  );
}
