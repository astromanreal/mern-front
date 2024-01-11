import React from "react";
import "./Style/Donate.css";
import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <>
      <FeaturedProduct />
      <div className="flex-center-all my-container">
        <Donatecard />
      </div>
      <Planyourtrip />
    </>
  );
}

export function Planyourtrip() {
  return (
    <>
      <div className="Fullscreenimg-app">
        <div className="Fullscreenimg-cta">
          <h1>Plan your jainism Tirth journey!</h1>
          <div className="Fullscreenimg-button">
            <a href="#0">Explore more...</a>
          </div>
        </div>
      </div>
    </>
  );
}

export function FeaturedProduct() {
  return (
    <>
      <div class="FeaturedProduct-products">
        <div class="FeaturedProduct-container">
          <h2>Featured Products</h2>
          <div class="FeaturedProduct-boxes">
            <div class="FeaturedProduct-box">
              <img src="https://i.postimg.cc/x11XLKtR/55.jpg" alt="" />
              <h3>Dummy Variable Product</h3>
              <span>$19.99</span>
            </div>
            <div class="FeaturedProduct-box">
              <img src="https://i.postimg.cc/MHYFJ2k1/bowtie.jpg" alt="" />
              <h3>Dummy Sale Product</h3>
              <span>$19.99</span>
            </div>
            <div class="FeaturedProduct-box">
              <img src="https://i.postimg.cc/DfYvRtgq/sd.jpg" alt="" />
              <h3>Dummy Simple Product</h3>
              <span>$14.99</span>
            </div>
            <div class="FeaturedProduct-box">
              <img src="https://i.postimg.cc/brKWRHjB/45.jpg" alt="" />
              <h3>Out of Stock Product</h3>
              <span>$9.99</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Donatecard() {
  return (
    <>
      <form className="plan-chooser">
        <div className="plan-header">
          <span className="plan-title">Choose your plan</span>
          <p className="plan-desc">
            Amet minim mollit non deserunt ullamco est sit .
          </p>
        </div>
        <div className="plan-option">
          <input value="free" id="free" name="plan" type="radio" />
          <label for="free">
            <div className="plan-info">
              <span className="plan-cost">$0</span>
              <span className="plan-name">Try Free</span>
            </div>
          </label>
        </div>
        <div className="plan-option">
          <input value="monthly" id="monthly" name="plan" type="radio" />
          <label for="monthly">
            <div className="plan-info">
              <span className="plan-cost">$29/month</span>
              <span className="plan-name">Monthly plan</span>
            </div>
          </label>
        </div>
        <div className="plan-option">
          <input value="annual" id="annual" name="plan" type="radio" />
          <label for="annual">
            <div className="plan-info">
              <span className="plan-cost">$19/month</span>
              <span className="plan-name">$228 billed in a year</span>
            </div>
            <span className="plan-reduction"> Save 20% </span>
          </label>
        </div>
        <Link to="/" title="" className="plan-choose-btn">
          Start
        </Link>
      </form>
    </>
  );
}
