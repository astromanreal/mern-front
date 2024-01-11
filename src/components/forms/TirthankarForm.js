import "./TirthankarForm.css";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function TirthankarForm() {
  const nevigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    lifespan: "",
    nirvana: "",
    qualities: "",
    teachings: "",
    symbol: "",
    color: "",
    tree: "",
    festivels: "",
    nickname: "",
    birth: "",
    ranks: "",
    introduction: "",
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
      const { data } = await axios.post("/tirthankar", {
        name: inputs.name,
        image: inputs.image,
        lifespan: inputs.lifespan,
        nirvana: inputs.nirvana,
        qualities: inputs.qualities,
        teachings: inputs.teachings,
        symbol: inputs.symbol,
        color: inputs.color,
        tree: inputs.tree,
        festivels: inputs.festivels,
        birth: inputs.birth,
        ranks: inputs.ranks,
        introduction: inputs.introduction,
        body: inputs.body,
      });
      if (data?.success) {
        toast.success("Tirthankar created");
        nevigate("/tirthankar");
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
          <div className="TirthankarForm-banner">
            <h1>Add Tirthankara</h1>
          </div>
          <div className="item">
            <p>Name</p>
            <input
              onChange={handleChange}
              value={inputs.name}
              type="text"
              name="name"
              required
            />
          </div>
          <div className="item">
            <div className="name-item">
              <input
                onChange={handleChange}
                value={inputs.symbol}
                type="text"
                name="symbol"
                required
                placeholder="Symbol"
              />
              <input
                onChange={handleChange}
                value={inputs.tree}
                type="text"
                name="tree"
                placeholder="Tree"
              />
            </div>
          </div>
          <div className="item">
            <div className="name-item">
              <input
                onChange={handleChange}
                value={inputs.ranks}
                type="text"
                name="ranks"
                placeholder="Rank"
                required
              />
              <input
                onChange={handleChange}
                value={inputs.lifespan}
                type="text"
                name="lifespan"
                placeholder="Lifespan"
              />
            </div>
          </div>
          <div className="item">
            <p>Image URL</p>
            <input
              onChange={handleChange}
              value={inputs.image}
              type="text"
              name="image"
              required
            />
          </div>
          <div className="item">
            <p>Birth place</p>
            <input
              onChange={handleChange}
              value={inputs.birth}
              type="text"
              name="birth"
              required
            />
          </div>

          <div className="item">
            <p>Color</p>
            <select
              onChange={handleChange}
              value={inputs.color}
              className="TirthankarForm-select"
              name="color"
              required
            >
              <option value="golden">Golden</option>
              <option value="red">Red</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="item">
            <p>Place of Nirvan</p>
            <select
              onChange={handleChange}
              value={inputs.nirvana}
              className="TirthankarForm-select"
              required
              name="nirvana"
            >
              <option value="kailash">Kailash</option>
              <option value="pavapuri">Pavapuri</option>
              <option value="girnar">Girnar</option>
              <option value="champapuri">Champapuri</option>
              <option value="sikharji">Sikharji</option>
            </select>
          </div>
          <div className="item">
            <p>Teachings</p>
            <textarea
              onChange={handleChange}
              value={inputs.teachings}
              rows="3"
              name="teachings"
            />
          </div>
          <div className="item">
            <p>Qualities</p>
            <textarea
              onChange={handleChange}
              value={inputs.qualities}
              rows="3"
              name="qualities"
            />
          </div>
          <div className="item">
            <p>Festival</p>
            <input
              onChange={handleChange}
              value={inputs.festivels}
              type="text"
              name="festivels"
            />
          </div>

          <div className="item">
            <p>Introduction</p>
            <textarea
              onChange={handleChange}
              value={inputs.introduction}
              rows="3"
              name="introduction"
            />
          </div>
          <div className="item">
            <p>Body</p>
            <textarea
              onChange={handleChange}
              value={inputs.body}
              rows="3"
              name="body"
            />
          </div>

          <div className="TirthankarForm-btn-block">
            <button type="submit" href="/">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
