import React from "react";
import "./Hero.css";

export default function Hero({ img }) {
  return (
    <>
      <div class="parallax-wrapper">
        <div class="hero parallax-content">
          <img src={img} alt="404 NOT found" />
        </div>
      </div>
    </>
  );
}
