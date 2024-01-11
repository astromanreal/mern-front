import React from "react";
import "./Tirthankarcard.css";
import { Link } from "react-router-dom";

export default function TirthankarCard({
  name,
  ranks,
  img,
  id,
  symbol,
  nirvana,
  color,
  desc,
}) {
  return (
    <>
      <div className="media-post-card">
        {/* <div className="media-avatar"></div> */}
        <Link className="media-title" to={`/tirthankar-details/${id}`}>
          {ranks} {name}
        </Link>
        <span className="datetime">{desc}</span>
        <img alt="not found." src={img} className="image-preview" />
        <div className="comment-like">
          <span>Symbol: {symbol}</span>
          <span>Nirvana: {nirvana}</span>
        </div>
      </div>
    </>
  );
}
