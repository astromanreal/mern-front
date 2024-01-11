import React from "react";
import { Link } from "react-router-dom";
import "./Style/Home.css";

export default function Home() {
  return (
    <>
      <ImageAnimation />
      <WebsiteServices />
      <Home3nav />
    </>
  );
}

export function ImageAnimation() {
  return (
    <>
      <section className="about-hero about-section">
        <div className="about-background-image"></div>
        <div className="about-hero-content-area">
          <h1>
            <Link to={"/sikharji/mountain"}>Parasnath hill </Link>
          </h1>
          <h3>Adventure Tours Around the highest peak of the state</h3>
          <h4>the city where 20 out of 24 Tirthankars get Mosksha (Nirvaa)</h4>
          {/* <button className="about-btn">Contact us</button> */}
        </div>
      </section>
    </>
  );
}

export function WebsiteServices() {
  return (
    <>
      <section id="WebsiteServices" class="Babysitter-container">
        <h1>Services: our website give to their customers</h1>
        <div class="WebsiteServices-container">
          <div class="WebsiteServices">
            <span>01</span>
            <h2 class="WebsiteServices-title">We play with them.</h2>
            <p class="WebsiteServices-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam tellus
              leo sodales vehicula risus a aliquam scelerisque eros. Donec in
              iaculis dui.
            </p>
            <button class="WebsiteServices-button">
              Explore..
              <div class="WebsiteServices-arrow-wrapper">
                <div class="WebsiteServices-arrow"></div>
              </div>
            </button>
          </div>
          <div class="WebsiteServices ">
            <span>02</span>
            <h2 class="WebsiteServices-title">We take care of them.</h2>
            <p class="WebsiteServices-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam tellus
              leo sodales vehicula risus a aliquam scelerisque eros. Donec in
              iaculis dui.
            </p>
            <button class="WebsiteServices-button">
              Explore..
              <div class="WebsiteServices-arrow-wrapper">
                <div class="WebsiteServices-arrow"></div>
              </div>
            </button>
          </div>
          <div class="WebsiteServices">
            <span>03</span>
            <h2 class="WebsiteServices-title">We train them.</h2>
            <p class="WebsiteServices-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam tellus
              leo sodales vehicula risus a aliquam scelerisque eros. Donec in
              iaculis dui.
            </p>
            <button class="WebsiteServices-button">
              Explore..
              <div class="WebsiteServices-arrow-wrapper">
                <div class="WebsiteServices-arrow"></div>
              </div>
            </button>
          </div>
          <div class="WebsiteServices">
            <span>04</span>
            <h2 class="WebsiteServices-title">We give them toys.</h2>
            <p class="WebsiteServices-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam tellus
              leo sodales vehicula risus a aliquam scelerisque eros. Donec in
              iaculis dui.
            </p>
            <button class="WebsiteServices-button">
              Explore..
              <div class="WebsiteServices-arrow-wrapper">
                <div class="WebsiteServices-arrow"></div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export function Home3nav() {
  return (
    <>
      <div className="expand-container">
        <div id="universe" className="expand-section">
          <div className="expand-content">
            <Link to="/sikharji">
              <h1>Shikharji</h1>
            </Link>
          </div>

          <div className="expand-overlay"></div>
        </div>

        <div id="technology" className="expand-section">
          <div className="expand-content">
            <Link to="/explore">
              <h1>Explore</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>

        <div id="mission" className="expand-section">
          <div className="expand-content">
            <Link to="/Jainism">
              <h1>Jainism</h1>
            </Link>
          </div>
          <div className="expand-overlay"></div>
        </div>
      </div>
    </>
  );
}
