import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddImage() {
  const [inputs, setInputs] = useState({
    title: "",
    url: "",
    category: "",
    subcategory: "",
    description: "",
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
      const { data } = await axios.post("/image", {
        title: inputs.title,
        url: inputs.url,
        category: inputs.category,
        subcategory: inputs.subcategory,
        description: inputs.description,
      });
      if (data?.success) {
        toast.success("Image Added!");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(inputs);
  };

  return (
    <>
      <div classNameName="my-container flex-center-all">
        <form className="Uiregister-form" onSubmit={handleSubmit} method="post">
          <p className="Uiregister-title">Add a image to Database... </p>
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
              value={inputs.url}
              required
              placeholder=""
              type="url"
              name="url"
              className="Uiregister-input"
            />
            <span>URL</span>
          </label>

          <label>
            <select
              onChange={handleChange}
              value={inputs.category}
              className="Uiregister-input"
              required
              name="category"
            >
              <option disabled>Select Category</option>
              <option value="sikharji">Sikharji</option>
              <option value="jainism">Jainism</option>
            </select>
          </label>

          <label>
            <select
              onChange={handleChange}
              value={inputs.subcategory}
              className="Uiregister-input"
              required
              name="subcategory"
            >
              <option disabled>Select Sub Category</option>
              <option value="mountain">Mountain</option>
              <option value="tonks">Tonks</option>
              <option value="temple">Temple</option>
            </select>
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

          <button type="submit" className="Uiregister-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
