import { Link } from "react-router-dom";

export default function CommunityCard({
  id,
  title,
  img,
  date,
  location,
  decription,
}) {
  return (
    <>
      <div class="task" draggable="true">
        <div class="tags">
          <span class="tag">
            <Link className="media-title" to={`/community-details/${id}`}>
              {title}
            </Link>
          </span>
          <button class="options"></button>
        </div>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown{" "}
        </p>
        <div class="stats">
          <div>
            <div>Comment: 19</div>
            <div>Like: 7</div>
          </div>
        </div>
      </div>
    </>
  );
}
