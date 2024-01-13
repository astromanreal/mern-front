import "./SikharjiItems.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SikharjiItems() {
  return (
    <>
      <SikharjiGallery />
    </>
  );
}

export function SikharjiIntro() {
  return (
    <>
      <SikharjiIntroContainer
        title="The city of temples"
        body="a great plateform for Jainism to interact with their community and explore thier culture, practices, sites, temples and many more..."
      />
    </>
  );
}

export function SikharjiIntroContainer(props) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1617904472808-7e038208077a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80)`,
        }}
        class="parall-container"
      >
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <Link to="/explore">Explore</Link>
      </div>
    </>
  );
}

export function SikharjiGallery() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getAllImage = async () => {
      try {
        const { data } = await axios.get("https://shikharji-api.vercel.app/sikharji/images");
        if (data?.success) {
          setImage(data?.images);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllImage();
  }, []);
  return (
    <>
      <main>
        <header className="TempleDetailsGallery-header">
          <h1>Gallery</h1>
        </header>
        <div className="grid-wrapper">
          {image &&
            image.map((i) => {
              return <img alt={i.title} className="image" src={i.url} />;
            })}
        </div>
      </main>
    </>
  );
}

export function SikharjiImageParallax() {
  return (
    <>
      <div class="Sikharji-Image-Parallax "></div>

      <div class="Sikharji-Image-Parallax Sikharji-Image-Parallax-p-2"></div>

      <div class="Sikharji-Image-Parallax Sikharji-Image-Parallax-p-3">
        {" "}
        <h1>
          Shikharji is one of the Holiest pilgrimage sites for Jains, in Giridih
          district, Jharkhand. It is located on Parasnath hill, the highest
          mountain in the state of Jharkhand
        </h1>
      </div>
    </>
  );
}
