import React, { useEffect, useState } from "react";
import "./Sikharji.css";
import axios from "axios";
import BlogCard from "../Blogs/BlogCard";
import { Link } from "react-router-dom";
import TempleCard from "../temples/TempleCard";

const SikharjiItems = [
  {
    title: "mountain",
    desc: "Parasath hill is the best place to chill out and rest cause it's has beautiful scenery and fresh air",
  },
  {
    title: "temples",
    desc: "The temples of Parasnath Shikharji are a Jain pilgrimage site located in the Parasnath Hills in India.",
  },
  {
    title: "tonks",
    desc: "Shikharji tonks are 31 temples on the Parasnath Hills in India that enshrine footprints of 24 Tirthankaras ",
  },
  {
    title: "hotels",
    desc: "There are a number of hotels located near Parasnath Shikharji, ranging from budget-friendly options to more luxurious accommodations.",
  },
  {
    title: "blogs",
    desc: "There are a number of blogs releted to the sikharji, which explain the beauty of parasnath hill and reveal many hidden secrets.",
  },
];

export default function SikharjiPage() {
  return (
    <>
      <h1 className="Sikharji-sub-title">
        Shikhar-JI has these main exploration topic...{" "}
      </h1>
      <div className="flex-wrap">
        {SikharjiItems.map((s) => {
          return (
            <SikharjiHoverCard title={s.title} desc={s.desc} img={s.img} />
          );
        })}
      </div>
    </>
  );
}

export function SikharjiHoverCard({ title, desc }) {
  return (
    <>
      <div className="sikharji-card-holder">
        <div className="explore-card">
          <div className="explore-card-details">
            <h1>{title}</h1>
            <p className="explore-text-body">{desc}</p>
          </div>
          <Link to={`${title}`} className="explore-card-button">
            More info...
          </Link>
        </div>
      </div>
    </>
  );
}

export function SikharjiFeatureMountain() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getAllImage = async () => {
      try {
        const { data } = await axios.get("/image/mountain");
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
      <SikharjiMountainGlass />
      <main>
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

export function SikharjiMountainGlass() {
  return (
    <>
      <section id="GLass-section">
        <div class="GLass-box">
          <h2>Icelandic Mountains</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
            nulla porttitor massa id neque aliquam vestibulum morbi blandit.
            Tellus elementum sagittis vitae et leo duis ut. Suspendisse in est
            ante in nibh mauris cursus mattis molestie. Duis at consectetur
            lorem donec massa.
          </p>
          <p>
            Ultricies integer quis auctor elit sed vulputate mi. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit. Turpis massa tincidunt
            dui ut ornare. Eget magna fermentum iaculis eu. Urna molestie at
            elementum eu facilisis sed odio morbi quis. Turpis egestas sed
            tempus urna et pharetra pharetra massa.
          </p>
        </div>
      </section>
    </>
  );
}

export function SikharjiFeatureTemple() {
  const [temples, setTemples] = useState([]);
  useEffect(() => {
    const getAllTemples = async () => {
      try {
        const { data } = await axios.get("/sikharji/temples");
        if (data?.success) {
          setTemples(data?.temples);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllTemples();
  }, []);
  // for temple images
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getAllImage = async () => {
      try {
        const { data } = await axios.get("/image/temple");
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
        <div className="grid-wrapper">
          {image &&
            image.map((i) => {
              return <img alt={i.title} className="image" src={i.url} />;
            })}
        </div>
      </main>
      <div className="my-container flex-wrap">
        {temples &&
          temples.map((temple) => {
            return (
              <TempleCard
                id={temple._id}
                name={temple.name}
                img={temple.image}
                location={temple.location}
                height={temple.height}
                visitor={temple.visitor}
                description={temple.description}
              />
            );
          })}
      </div>
    </>
  );
}

export function SikharjiFeatureTonk() {
  return (
    <>
      <div className="my-container">
        <h2>
          Shikharji tonks are 31 temples on the Parasnath Hills in India that
          enshrine footprints of 24 Tirthankaras (Jain prophets).
        </h2>
        <hr />
        <h2>
          The tonks are spread out over a 2-mile horizontal distance and are
          about 4.5 miles in total walking distance.
        </h2>
        <hr />
        <h2>
          The tonks are not adorned with idols, but only have footprints of the
          Tirthankaras.
        </h2>
        <hr />
        <h2>
          The tonks are a popular pilgrimage site for Jains and are considered
          to be very sacred.
        </h2>
        <hr />
      </div>
    </>
  );
}

export function SikharjiFeatureHotel() {
  return (
    <>
      <div className="my-container">
        <h2>
          There are a number of hotels located near Parasnath Shikharji, ranging
          from budget-friendly options to more luxurious accommodations.
        </h2>
        <hr />
        <h2>
          The hotels offer a variety of amenities, including free Wi-Fi,
          restaurants, and parking.
        </h2>
        <hr />
        <h2>
          Some of the hotels also have facilities for yoga and meditation, as
          well as tour desks that can help guests plan their pilgrimage.
        </h2>
        <hr />
        <h2>
          The hotels are a convenient place to stay for visitors who want to
          explore the Parasnath Hills and the surrounding area.
        </h2>
      </div>
    </>
  );
}

export function SikharjiFeatureBlogSlider() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        const { data } = await axios.get("/sikharji/blog");
        if (data?.success) {
          setBlogs(data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllBlogs();
  }, []);
  return (
    <>
      <div className="slider" x-data="{start: true, end: false}">
        <h1 className="title">Blogs of Sikharji</h1>
        <div className="slider__content" x-ref="slider">
          {blogs &&
            blogs.map((blog) => {
              return (
                <BlogCard
                  id={blog._id}
                  title={blog.title}
                  desc={blog.description}
                  author={blog.author}
                  img={blog.image}
                  date={blog.createdAt}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
