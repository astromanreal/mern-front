import axios from "axios";
import "./Community.css";
import imge from "../Image/neubula.jpg";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CommunityDetails() {
  const id = useParams().id;
  const [diary, setDiary] = useState([]);
  useEffect(() => {
    const getDiaryDetails = async () => {
      try {
        const { data } = await axios.get(`/diary/${id}`);
        if (data?.success) {
          setDiary([data?.diary]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDiaryDetails();
  }, [id]);
  return (
    <>
      <div className="detail-page-center">
        {diary &&
          diary.map((diary) => (
            <>
              <CommunityDetailsCenter
                title={diary.title}
                img={imge}
                description={diary.description}
              />
            </>
          ))}
      </div>
    </>
  );
}

export function CommunityDetailsCenter({ img, title, description, body }) {
  return (
    <>
      <main id="Singlearticle-main">
        <article className="blog-article-tag">
          <h2>{title}</h2>
          <p>
            Andrei Tarkovsky was born in the village of Zavrazhye in the
            Yuryevetsky District of the Ivanovo Industrial Oblast (modern-day
            Kadyysky District of the Kostroma Oblast, Russia) to the poet and
            translator{" "}
            <span className="blog-link">Arseny Aleksandrovich Tarkovsky</span>,
            a native of Yelysavethrad (now Kropyvnytskyi, Ukraine), and Maria
            Ivanova Vishnyakova, a graduate of the Maxim Gorky Literature
            Institute who later worked as a corrector; she was born in Moscow in
            the Dubasov family estate.
          </p>
          <img src={img} alt="Andrei Tarkovsky Portrait" />
        </article>

        <div className="highlight">
          <h3>💡 Inspiration</h3>
          <p>{description}</p>
        </div>
      </main>
    </>
  );
}
