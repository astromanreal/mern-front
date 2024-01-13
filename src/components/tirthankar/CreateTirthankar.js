import axios from "axios";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateTirthankar() {
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
    festival: "",
    nickname: "",
    birth: "",
    ranks: "",
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
      const { data } = await axios.post("https://shikharji-api.vercel.app/tirthankar", {
        name: inputs.name,
        image: inputs.image,
        lifespan: inputs.lifespan,
        nirvana: inputs.nirvana,
        qualities: inputs.qualities,
        teachings: inputs.teachings,
        symbol: inputs.symbol,
        color: inputs.color,
        tree: inputs.tree,
        festival: inputs.festival,
        birth: inputs.birth,
        ranks: inputs.ranks,
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
      <div className="flex-center-all">
        <form className="Uiregister-form" onSubmit={handleSubmit} method="post">
          <p className="Uiregister-title">Add a Tirthankar </p>
          <p className="Uiregister-message">
            A spiritual teacher of the dharma
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
            <span>Name</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.image}
              required
              name="image"
              type="text"
              className="Uiregister-input"
            />
            <span>Image</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.lifespan}
              placeholder=""
              type="text"
              name="lifespan"
              className="Uiregister-input"
            />
            <span>lifespan</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.nirvana}
              required
              placeholder=""
              type="text"
              name="nirvana"
              className="Uiregister-input"
            />
            <span>nirvana</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.qualities}
              placeholder=""
              type="text"
              name="qualities"
              className="Uiregister-input"
            />
            <span>qualities</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.teachings}
              placeholder=""
              type="text"
              name="teachings"
              className="Uiregister-input"
            />
            <span>teachings</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.symbol}
              required
              placeholder=""
              type="text"
              name="symbol"
              className="Uiregister-input"
            />
            <span>symbol</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.color}
              required
              placeholder=""
              type="text"
              name="color"
              className="Uiregister-input"
            />
            <span>color</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              placeholder=""
              type="text"
              name="tree"
              className="Uiregister-input"
            />
            <span>tree</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.festival}
              placeholder=""
              type="text"
              name="festival"
              className="Uiregister-input"
            />
            <span>festival</span>
          </label>
          <label>
            <input
              onChange={handleChange}
              value={inputs.nickname}
              placeholder=""
              type="text"
              name="nickname"
              className="Uiregister-input"
            />
            <span>nickname</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.birth}
              required
              placeholder=""
              type="text"
              name="birth"
              className="Uiregister-input"
            />
            <span>birth</span>
          </label>

          <label>
            <input
              onChange={handleChange}
              value={inputs.ranks}
              required
              placeholder=""
              type="text"
              name="ranks"
              className="Uiregister-input"
            />
            <span>Ranks</span>
          </label>

          <button type="submit" className="Uiregister-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
