import React from "react";
import "./Style/Explore.css";
import { Link } from "react-router-dom";

const ExploreThings = [
  {
    title: "sikharji/mountain ",
    desc: "Parasath hill is the best place to chill out and rest cause it's has beautiful scenery and fresh air.",
    img: "https://i.pinimg.com/564x/30/25/8c/30258ccea1e69cd79528f32dc3524230.jpg",
  },
  {
    title: "jainism ",
    desc: "an ancient Indian religion that emphasizes the importance of non-violence, or ahimsa.",
    img: "https://i.pinimg.com/564x/30/25/8c/30258ccea1e69cd79528f32dc3524230.jpg",
  },
  {
    title: "temple",
    desc: "The temples of Parasnath Shikharji are a Jain pilgrimage site located in the Parasnath Hills in India.",
    img: "https://i.pinimg.com/564x/26/67/9c/26679c21569550c1bf56d7e491444464.jpg",
  },
  {
    title: "tirthankar",
    desc: "the supreme preachers of Dharma in Jainism, who have conquered the cycle of death and rebirth.",
    img: "https://i.pinimg.com/564x/26/67/9c/26679c21569550c1bf56d7e491444464.jpg",
  },

  {
    title: "blog",
    desc: "There are a number of blogs releted to the jain community and sikharji, that inspire you.",
    img: "https://t3.ftcdn.net/jpg/02/86/70/92/360_F_286709271_eqrdMRV1mju29M3FhRrP2j0P5nMyLeOp.jpg",
  },
];

export default function Explore() {
  return (
    <>
      <ExploreItem />
    </>
  );
}
export function ExploreItem() {
  return (
    <>
      <div className="my-container flex-wrap">
        {ExploreThings.map((item) => {
          return (
            <ExploreCard img={item.img} title={item.title} desc={item.desc} />
          );
        })}
      </div>
    </>
  );
}

export function ExploreCard({ title, img, desc }) {
  return (
    <>
      <div className="to-card">
        <div className="img-cover">
          <img alt="lost" src={img} />
        </div>

        <div className="to-desc">
          <h1>{title}</h1>
          <p className="tdesc">{desc}</p>
          <Link to={`/${title}`}>Bring me </Link>
        </div>
      </div>
    </>
  );
}
