import axios from "axios";
import "./TempleDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TempleDetails() {
  const id = useParams().id;
  const [temple, setTemple] = useState([]);
  useEffect(() => {
    const getTempleDetails = async () => {
      try {
        const { data } = await axios.get(`https://shikharji-api.vercel.app/temple/${id}`);
        if (data?.success) {
          setTemple([data?.temple]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTempleDetails();
  }, [id]);

  return (
    <>
      <div className="detail-page-center">
        {temple &&
          temple.map((temple) => (
            <>
              <TempleBlogData name={temple.name} image={temple.image} />
            </>
          ))}
      </div>
    </>
  );
}

export function TempleBlogData({ name, image }) {
  return (
    <>
      <section class="Parallax-top">
        <div class="Parallax-title">
          <h3>Let's Explore</h3>
          <h1>{name}</h1>
        </div>
      </section>
      <section class="Parallax-page">
        <div
          class="Parallax-parallax1"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div class="Parallax-paragraph Parallax-first">
          <p>
            <span>L</span>orem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div
          class="Parallax-parallax2"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div class="Parallax-overlay"></div>
          <h2>Beautiful</h2>
        </div>
        <div class="Parallax-paragraph Parallax-second">
          <p>
            <span>O</span>rci porta non pulvinar neque laoreet suspendisse
            interdum. Nulla malesuada pellentesque elit eget gravida. Ac orci
            phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Ut
            lectus arcu bibendum at varius vel pharetra vel turpis. Eleifend
            quam adipiscing vitae proin sagittis nisl rhoncus. Aliquet eget sit
            amet tellus cras adipiscing enim eu turpis. Pharetra convallis
            posuere morbi leo urna molestie. Volutpat lacus laoreet non
            curabitur gravida. Ornare aenean euismod elementum nisi quis
            eleifend quam.
          </p>
        </div>
        <div
          class="Parallax-parallax3"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div class="Parallax-paragraph Parallax-third">
          <p>
            <span>A</span>uctor neque vitae tempus quam pellentesque. In nibh
            mauris cursus mattis molestie a iaculis at. Sem integer vitae justo
            eget magna fermentum iaculis eu non. Eget velit aliquet sagittis id.
            Sed libero enim sed faucibus turpis in eu mi bibendum. Blandit
            libero volutpat sed cras. Ultricies integer quis auctor elit sed
            vulputate mi sit.
          </p>
        </div>
      </section>
    </>
  );
}
