import axios from "axios";
import React, { useEffect, useState } from "react";
import TempleCard from "./TempleCard";
import CenterIntro from "./CenterIntro";

export default function Templepage() {
  const [temples, setTemples] = useState([]);

  useEffect(() => {
    const getAllTemples = async () => {
      try {
        const { data } = await axios.get("/temple");
        if (data?.success) {
          setTemples(data?.temple);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllTemples();
  }, []);

  // for images
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getAllImage = async () => {
      try {
        const { data } = await axios.get("/sikharji/images");
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
      <CenterIntro />

      <div className="my-container flex-wrap">
        {temples &&
          temples.map((temple) => (
            <TempleCard
              id={temple._id}
              name={temple.name}
              img={temple.image}
              location={temple.location}
              height={temple.height}
              visitor={temple.visitor}
              description={temple.description}
            />
          ))}
      </div>

      <header className="TempleDetailsGallery-header">
        <h1>Gallery</h1>
      </header>

      <section className="posts">
        <div className="ui grid">
          <ul id="postsContainer" className="polaroid">
            {image &&
              image.map((i) => {
                return <TempleSingleImg url={i.url} title={i.title} />;
              })}
          </ul>
        </div>
      </section>
    </>
  );
}

export function TempleSingleImg({ url, title }) {
  return (
    <>
      <li>
        <article>
          <img alt="lost" src={url} />
          <h1>{title}</h1>
        </article>
      </li>
    </>
  );
}
