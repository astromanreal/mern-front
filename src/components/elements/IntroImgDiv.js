import React from "react";
import "./IntroImgDiv.css";

export default function IntroImgDiv(props) {
  return (
    <>
      <section
        style={{
          background: `url(${props.img}) no-repeat center center/cover`,
        }}
        className="xbox"
      >
        <div className="content">
          <h1>{props.title}</h1>
        </div>
      </section>
    </>
  );
}
