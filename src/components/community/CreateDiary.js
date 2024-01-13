import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function CreateDiary() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    images: "",
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
      const { data } = await axios.post("https://shikharji-api.vercel.app/diary", {
        title: inputs.title,
        description: inputs.description,
        location: inputs.location,
        images: inputs.images,
      });
      if (data?.success) {
        toast.success("Diary created");
      }
    } catch (error) {
      console.log(error);
    }
    setInputs("");
    console.log(inputs);
  };
  return (
    <>
      <div className="flex-center-all">
        <form className="Uiregister-form" onSubmit={handleSubmit} method="post">
          <p className="Uiregister-title">Register a temple </p>
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
              value={inputs.location}
              required
              placeholder=""
              type="text"
              name="location"
              className="Uiregister-input"
            />
            <span>Location</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.images}
              required
              placeholder=""
              type="text"
              name="images"
              className="Uiregister-input"
            />
            <span>Image</span>
          </label>

          <button type="submit" className="Uiregister-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
