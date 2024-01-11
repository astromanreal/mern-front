import React from "react";
import TempleForm from "./TempleForm";
import BlogForm from "./BlogForm";
import TirthankarForm from "./TirthankarForm";
import AddImage from "../pages/Image";

export default function Forms() {
  return (
    <>
      <div className="form-container">
        <BlogForm />
        <TirthankarForm />
        <TempleForm />
        <AddImage />
      </div>
    </>
  );
}
