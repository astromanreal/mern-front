import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Posttemple() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
    height: "",
    visitor: "",
    createdDate: "",
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
      const { data } = await axios.post("/temple", {
        name: inputs.name,
        location: inputs.location,
        description: inputs.description,
        image: inputs.image,
        height: inputs.height,
        visitor: inputs.visitor,
        createdDate: inputs.createdDate,
      });
      if (data?.success) {
        toast.success("Temple created!");
        navigate("/temple");
      }
    } catch (error) {
      console.log(error);
    }
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
              value={inputs.name}
              required
              name="name"
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
              value={inputs.height}
              required
              placeholder=""
              type="text"
              name="height"
              className="Uiregister-input"
            />
            <span>Height</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.visitor}
              required
              placeholder=""
              type="number"
              name="visitor"
              className="Uiregister-input"
            />
            <span>Visitor</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.createdDate}
              required
              placeholder=""
              type="text"
              name="createdDate"
              className="Uiregister-input"
            />
            <span>created Date</span>
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
          <button type="submit" className="Uiregister-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
