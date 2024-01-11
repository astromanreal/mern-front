import { useState } from "react";
import "./BlogForm.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function BlogForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    subcategory: "",
    author: "",
    type: "",
    body: "",
  });

  //   Input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //   Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/blog", {
        title: inputs.title,
        image: inputs.image,
        description: inputs.description,
        category: inputs.category,
        subcategory: inputs.subcategory,
        author: inputs.author,
        type: inputs.type,
        body: inputs.body,
      });
      if (data?.success) {
        toast.success("Blog created");
        navigate("/blog");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(inputs);
  };
  return (
    <>
      <div className="testbox">
        <form id="BlogForm" onSubmit={handleSubmit} method="post">
          <div className="BlogForm-banner">
            <h1>Blog Form</h1>
          </div>
          <div className="BlogForm-item">
            <p>Title of Blog</p>
            <input
              onChange={handleChange}
              value={inputs.title}
              className="BlogForm-input"
              type="text"
              name="title"
            />
          </div>
          <div className="BlogForm-item">
            <p>Image URL</p>
            <input
              onChange={handleChange}
              value={inputs.image}
              className="BlogForm-input"
              type="url"
              name="image"
            />
          </div>
          <div className="BlogForm-item">
            <p>Short Descriptions</p>
            <textarea
              onChange={handleChange}
              value={inputs.description}
              className="BlogForm-textarea"
              rows="2"
              required
              name="description"
            ></textarea>
          </div>
          <div className="BlogForm-item">
            <p>Select category</p>
            <select
              onChange={handleChange}
              value={inputs.category}
              className="TirthankarForm-select"
              required
              name="category"
            >
              <option value="jainism">Jainism</option>
              <option value="sikharji">Sikharji</option>
            </select>
          </div>
          <div className="BlogForm-item">
            <p>Select Sub-category</p>
            <select
              onChange={handleChange}
              value={inputs.subcategory}
              className="TirthankarForm-select"
              required
              name="subcategory"
            >
              <option value="mountain">Mountain</option>
              <option value="tonks">Tonks</option>
              <option value="art">Art</option>
              <option value="philosophy">Philosophy</option>
              <option value="principle">Principle</option>
              <option value="practice">Practice</option>
            </select>
          </div>

          <div className="BlogForm-contact-item">
            <div className="BlogForm-item">
              <p>Author</p>
              <input
                onChange={handleChange}
                value={inputs.author}
                className="BlogForm-input"
                type="text"
                name="author"
              />
            </div>
            <div className="BlogForm-item">
              <p>Type</p>
              <input
                onChange={handleChange}
                value={inputs.type}
                className="BlogForm-input"
                type="text"
                name="type"
              />
            </div>
          </div>

          <div className="BlogForm-item">
            <p>Body of the Article</p>
            <textarea
              onChange={handleChange}
              value={inputs.body}
              className="BlogForm-textarea"
              rows="4"
              required
              name="body"
            ></textarea>
          </div>

          <div className="BlogForm-btn-block">
            <button type="submit" href="/">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
