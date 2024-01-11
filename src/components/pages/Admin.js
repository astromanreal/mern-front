import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Forms from "../forms/Forms";

export default function Admin() {
  const [inputs, setInputs] = useState({
    password: "",
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
      const { data } = await axios.post("/user/admin", {
        password: inputs.password,
      });
      if (data?.success) {
        toast.success("Login Successful");
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
              value={inputs.password}
              required
              name="password"
              type="text"
              className="Uiregister-input"
            />
            <span>Password</span>
          </label>

          <button type="submit" className="Uiregister-submit">
            Submit
          </button>
        </form>
      </div>
      <Forms />
    </>
  );
}
