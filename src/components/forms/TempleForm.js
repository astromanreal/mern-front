import "./TempleForm.css";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function TempleForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    introduction: "",
    place: "",
    god: "",
    nickname: "",
    architecture: "",
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
      const { data } = await axios.post("https://shikharji-api.vercel.app/temple", {
        name: inputs.name,
        introduction: inputs.introduction,
        place: inputs.place,
        nickname: inputs.nickname,
        god: inputs.god,
        architecture: inputs.architecture,
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
      <div className="temple-testbox">
        <form id="temple-form" onSubmit={handleSubmit} method="post">
          <h1>Register a temple!</h1>
          <h5>Fill all required Information</h5>
          <div className="item">
            <div className="name-item">
              <input
                onChange={handleChange}
                value={inputs.name}
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                onChange={handleChange}
                value={inputs.nickname}
                type="text"
                name="nickname"
                placeholder="nickname"
              />
            </div>
          </div>
          <div className="item">
            <div className="name-item">
              <input
                onChange={handleChange}
                value={inputs.place}
                type="text"
                name="place"
                placeholder="Place"
              />
              <input
                onChange={handleChange}
                value={inputs.god}
                type="text"
                name="god"
                placeholder="Feature God"
              />
            </div>
          </div>
          <div className="item">
            <div className="name-item">
              <input
                onChange={handleChange}
                value={inputs.visitor}
                type="number"
                name="visitor"
                placeholder="Visitor/year"
              />
              <input
                onChange={handleChange}
                value={inputs.height}
                type="number"
                name="height"
                placeholder="Height in Meter"
              />
            </div>
          </div>
          <div className="item">
            <p>Description of the temples</p>
            <textarea
              onChange={handleChange}
              value={inputs.description}
              rows="2"
              name="description"
            ></textarea>
          </div>
          <div className="item">
            <input
              onChange={handleChange}
              value={inputs.image}
              type="text"
              name="image"
              placeholder="Image URL"
            />
          </div>

          <hr />
          {/* 
          <div className="item">
            <p>Address</p>
            <input
              onChange={handleChange}
              value={inputs.name}
              type="text"
              name="name"
              placeholder="Street address"
            />
            <input
              onChange={handleChange}
              value={inputs.name}
              type="text"
              name="name"
              placeholder="Street address line 2"
            />
            <div className="city-item">
              <input
                onChange={handleChange}
                value={inputs.name}
                type="text"
                name="name"
                placeholder="City"
              />
              <input
                onChange={handleChange}
                value={inputs.name}
                type="text"
                name="name"
                placeholder="Region"
              />
              <input
                onChange={handleChange}
                value={inputs.name}
                type="text"
                name="name"
                placeholder="Postal / Zip code"
              />
              <select onChange={handleChange} value={inputs.name}>
                <option value="">Country</option>
                <option value="1">Russia</option>
                <option value="2">Germany</option>
                <option value="3">France</option>
                <option value="4">Armenia</option>
                <option value="5">USA</option>
              </select>
            </div>
          </div>
          <hr /> */}

          <div className="item">
            <p>Introduction of the temples</p>
            <textarea
              onChange={handleChange}
              value={inputs.introduction}
              rows="3"
              name="introduction"
            ></textarea>
          </div>
          <div className="item">
            <p>Please describe Architecture in detail.</p>
            <textarea
              onChange={handleChange}
              value={inputs.architecture}
              rows="5"
              name="architecture"
            ></textarea>
          </div>

          <div className="btn-block">
            <button type="submit" href="/">
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
