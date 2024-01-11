import React, { useEffect, useState } from "react";
import "./Jainism.css";
import BlogCard from "../Blogs/BlogCard";
import axios from "axios";
import { Link } from "react-router-dom";

const JainismItems = [
  {
    title: "art",
    desc: "Jain art is a diverse and rich tradition that spans centuries. It is focus on non-violence, its use of symbolism, and its intricate craftsmanship. Jain art can be found in a variety of forms, including sculpture, painting, and architecture.",
  },
  {
    title: "practices",
    desc: "Jainism is a religion that emphasizes non-violence, vegetarianism, and respect for all living things. Jains believe that the path to enlightenment is through spiritual purity and detachment from the material world.",
  },
  {
    title: "philosophy",
    desc: "Jainism is a transtheistic religion that emphasizes non-violence, non-attachment, and non-absolutism. It teaches that the soul is eternal and can achieve liberation from the cycle of rebirth through right conduct, right knowledge, and right faith.",
  },
  {
    title: "principle",
    desc: "Jainism is a religion that emphasizes non-violence, non-attachment, and purity. Its five main principles are ahimsa (non-violence), satya (truth), asteya (not stealing), brahmacharya (chastity), and aparigraha (non-possession).",
  },
];

export default function JainFeaturePage() {
  return (
    <>
      <div class="flex-wrap ">
        {JainismItems.map((j) => {
          return <JainFeatureCard title={j.title} desc={j.desc} />;
        })}
      </div>
    </>
  );
}

export function JainFeatureCard({ title, desc }) {
  return (
    <>
      <div className="JainismFeatureCard-card">
        <p className="JainismFeatureCard-card-title">{title}</p>
        <p className="JainismFeatureCard-small-desc">{desc}</p>
        <Link to={`/jainism/${title}`}>
          {" "}
          <button className="JainFeatureCard-button">
            <span className="JainFeatureCard-button-content">Know More.. </span>
          </button>
        </Link>

        <div className="JainismFeatureCard-go-corner">
          <div className="JainismFeatureCard-go-arrow">→</div>
        </div>
      </div>
    </>
  );
}

export function JainFeatureArt() {
  // for arts blog
  const [arts, setArts] = useState([]);
  useEffect(() => {
    const getArts = async () => {
      try {
        const { data } = await axios.get("/jainism/art");
        if (data?.success) {
          setArts(data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getArts();
  }, []);
  return (
    <>
      <header className="TempleDetailsGallery-header">
        <h1>Arts of jainism</h1>
      </header>

      <div className="flex-wrap ">
        {arts &&
          arts.map((blog) => {
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
    </>
  );
}
export function JainFeaturePhilosophy() {
  // for philosophy
  const [philosophy, setPhilosophy] = useState([]);
  useEffect(() => {
    const getPhilosophy = async () => {
      try {
        const { data } = await axios.get("/jainism/philosophy");
        if (data?.success) {
          setPhilosophy(data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPhilosophy();
  }, []);
  return (
    <>
      {" "}
      <header className="TempleDetailsGallery-header">
        <h1>Philosophy of jainism</h1>
      </header>
      <div className="flex-wrap ">
        {philosophy &&
          philosophy.map((blog) => {
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
    </>
  );
}
export function JainFeaturePractices() {
  // for practices
  const [practices, setPractices] = useState([]);
  useEffect(() => {
    const getPractices = async () => {
      try {
        const { data } = await axios.get("/jainism/practices");
        if (data?.success) {
          setPractices(data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPractices();
  }, []);

  return (
    <>
      {" "}
      <header className="TempleDetailsGallery-header">
        <h1>Practices of jainism</h1>
      </header>
      <div className="flex-wrap ">
        {practices &&
          practices.map((blog) => {
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
    </>
  );
}
export function JainFeaturePrinciples() {
  // for principles
  const [principles, setPrinciples] = useState([]);
  useEffect(() => {
    const getPrinciples = async () => {
      try {
        const { data } = await axios.get("/jainism/principles");
        if (data?.success) {
          setPrinciples(data?.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPrinciples();
  }, []);
  return (
    <>
      {" "}
      <header className="TempleDetailsGallery-header">
        <h1>Principles of jainism</h1>
      </header>
      <div className="flex-wrap ">
        {principles &&
          principles.map((blog) => {
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
    </>
  );
}
