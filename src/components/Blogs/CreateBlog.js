import axios from "axios";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CreateBlog() {
  // const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    description: "",
    category: "",
    subcategory: "",
    author: "",
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
        body: inputs.body,
      });
      if (data?.success) {
        toast.success("Blog created");
        // navigate("/blog");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(inputs);
  };

  return (
    <>
      <div classNameName="flex-center-all">
        <form className="Uiregister-form" onSubmit={handleSubmit} method="post">
          <p className="Uiregister-title">Publish a blog.. </p>
          <p className="Uiregister-message">
            Signup now and get full access to our app.
          </p>

          <label>
            <input
              onChange={handleChange}
              value={inputs.title}
              required
              name="title"
              type="text"
              className="Uiregister-input"
            />
            <span>Title</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.image}
              required
              placeholder=""
              type="url"
              name="image"
              className="Uiregister-input"
            />
            <span>Image</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.description}
              required
              name="description"
              type="text"
              className="Uiregister-input"
            />
            <span>Description</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.category}
              required
              name="category"
              type="text"
              className="Uiregister-input"
            />
            <span>category</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.subcategory}
              required
              name="subcategory"
              type="text"
              className="Uiregister-input"
            />
            <span>Sub category</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.author}
              required
              placeholder=""
              type="text"
              name="author"
              className="Uiregister-input"
            />
            <span>Author</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.body}
              required
              placeholder=""
              type="text"
              name="body"
              className="Uiregister-input"
            />
            <span>Body</span>
          </label>
          <button type="submit" className="Uiregister-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
