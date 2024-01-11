import React, { useState } from "react";
import "./Logsign.css";
import axios from "axios";

export default function Logsign() {
  // state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginput, setloginput] = useState({
    email: "",
    password: "",
  });

  // handel input change
  const handelRegisterChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handel login input change
  const handelLoginChange = (e) => {
    setloginput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // handel register Submit form
  const handelRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });

      if (data.success) {
        alert("user register successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handel login Submit form
  const handelLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/login", {
        email: loginput.email,
        password: loginput.password,
      });

      if (data.success) {
        // localStorage.setItem("userId", data?.user._id);
        alert("user login successfully");
      }
      console.log(loginput);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form" method="post" onSubmit={handelLoginSubmit}>
            <label for="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              value={loginput.email}
              onChange={handelLoginChange}
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              value={loginput.password}
              onChange={handelLoginChange}
              type="password"
              name="password"
              placeholder="Password"
              required=""
            />
            <button>Log in</button>
          </form>
        </div>

        <div className="register">
          <form className="form" method="post" onSubmit={handelRegisterSubmit}>
            <label for="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              onChange={handelRegisterChange}
              type="text"
              name="name"
              placeholder="Username"
              required=""
              value={inputs.name}
            />
            <input
              className="input"
              onChange={handelRegisterChange}
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={inputs.email}
            />
            <input
              className="input"
              onChange={handelRegisterChange}
              type="password"
              name="password"
              placeholder="Password"
              required=""
              value={inputs.password}
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}
