import axios from "axios";
import "./TirthankarDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TirthankarDetails() {
  const id = useParams().id;
  const [tirthankar, setTirthankars] = useState([]);
  useEffect(() => {
    const getTirthankarDetail = async () => {
      try {
        const { data } = await axios.get(`https://shikharji-api.vercel.app/tirthankar/${id}`);
        if (data?.tirthankar) {
          setTirthankars([data?.tirthankar]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTirthankarDetail();
  }, [id]);
  return (
    <>
      <div className="">
        {tirthankar &&
          tirthankar.map((tirthankar) => (
            <>
              <TirthankarTitlesHero
                ranks={tirthankar.ranks}
                name={tirthankar.name}
              />
              <TirthankarImage
                image={tirthankar.image}
                name={tirthankar.name}
              />
              <TirthankarQuote title={tirthankar.name} />
              <TirthankarBlogData />
            </>
          ))}
      </div>
    </>
  );
}

export function TirthankarTitlesHero({ ranks, name }) {
  return (
    <>
      <div id="parallax-world">
        <section>
          <div className="parallax-world-title">
            <h3>{ranks}'st Tirthankar</h3>
            <h1>on Jainism</h1>
          </div>
        </section>
      </div>
    </>
  );
}

export function TirthankarImage({ image, name }) {
  return (
    <>
      <div id="parallax-world-of-ugg">
        <section>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="parallax-one"
          >
            <h2>{name}</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export function TirthankarQuote({ title }) {
  return (
    <>
      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>Start before you are ready</h1>
          <h4>&mdash;{title}</h4>
        </div>
      </div>

      <div id="parallax-world-of-ugg">
        <section>
          <div className="block">
            <p>
              <h1>Heading</h1>
              <span className="first-character">I</span>n 1978, Brian Smith
              landed in Southern California with a bag of sheepskin boots and
              hope. He fell in love with the sheepskin experience and was
              convinced the world would one day share this love. The beaches of
              Southern California had long been an epicenter of a relaxed,
              casual lifestyle, a lifestyle that Brian felt was a perfect fit
              for his brand. So he founded the UGG brand, began selling his
              sheepskin boots and they were an immediate sensation. By the mid
              1980's, the UGG brand became a symbol of relaxed southern
              California culture, gaining momentum through surf shops and other
              shops up and down the coast of California, from San Diego to Santa
              Cruz.
            </p>
            <p className="line-break margin-top-10"></p>
          </div>
        </section>
      </div>
    </>
  );
}

export function TirthankarBlogData() {
  return (
    <>
      <div className="Bigfoot-page-wrap">
        <main className="Bigfoot-page-main" id="Bigfoot-article">
          <article>
            <h1>Bigfoot</h1>
            <h2>Fact or fiction? </h2>
            <blockquote>
              Praesent nec lacus urna. Pellentesque hendrerit turpis sed dictum
              vehicula. Ut in sapien odio. Sed vitae finibus nisl. Pellentesque
              dui nisl, condimentum facilisis feugiat nec, dictum quis nisi.
              Donec pellentesque ornare mauris non congue. Integer consequat
              nulla at odio congue luctus.
            </blockquote>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos laborum cumque incidunt, enim ipsa dicta? Porro illo
              doloribus, consectetur eum exercitationem sit ipsam, est nesciunt
              maxime, eius animi dolor? Harum.
            </p>

            <p>
              Illo numquam, sapiente neque repellendus facere amet doloribus
              asperiores quia eum? Sunt vero amet neque vel? Tempora, nulla
              voluptatum amet autem culpa magnam debitis! Dolores esse quam amet
              nobis ut.
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
