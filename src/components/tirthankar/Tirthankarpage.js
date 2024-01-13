import axios from "axios";
import "./TirthankarPage.css";
import React, { useEffect, useState } from "react";
import TirthankarCard from "./TirthankarCard";
import { Link } from "react-router-dom";

export default function Tirthankarpage() {
  const [tirthankars, setTirthankars] = useState([]);

  useEffect(() => {
    const getAllTirthankars = async () => {
      try {
        const { data } = await axios.get("https://shikharji-api.vercel.app/tirthankar");
        if (data?.success) {
          setTirthankars(data?.tirthankar);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllTirthankars();
  }, []);
  return (
    <>
      <BabysitterHero />

      <div className="my-container flex-wrap">
        {tirthankars &&
          tirthankars.map((tirthankar) => {
            return (
              <TirthankarCard
                img={tirthankar.image}
                id={tirthankar._id}
                name={tirthankar.name}
                symbol={tirthankar.symbol}
                desc={tirthankar.introduction}
                nirvana={tirthankar.nirvana}
                color={tirthankar.color}
              />
            );
          })}
      </div>
    </>
  );
}
export function BabysitterHero() {
  return (
    <>
      <div class="Babysitter-hero">
        {/* <!-- home section --> */}
        <section class="Babysitter-section_1  ">
          <div class="Babysitter-slogan">
            <h1 class="Babysitter-slogan-title">
              YOUR KIDS HAPPINESS IS OUR PRIORITY
            </h1>
            <p class="Babysitter-slogan-text">
              Our services strives to exceed your expectations and deliver
              premium care to your famiily. Each individually selected
              babysitter exhibits an unparalled level of proffesionalism.
            </p>
            <div class="Babysitter-hero-btn">
              <Link to="/" class="Babysitter-home-btn-link">
                I need a babysitter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
