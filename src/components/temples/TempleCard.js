import { Link } from "react-router-dom";
import "./TempleCard.css";

export default function TempleCard({
  name,
  id,
  description,
  img,
  location,
  height,
  visitor,
}) {
  return (
    <>
      <div className="card8-wrapper">
        <div className="card8-widget">
          <img src={img} alt={name} className="widget__photo" />
          <Link to={`/temple-details/${id}`}>
            <div className="widget__button">More...</div>
          </Link>
          <div className="widget__details">
            <div className="widget__name">{name}</div>
            <div className="widget__type">Jainism</div>
            <div className="widget__info">
              <span>{description}</span>
            </div>
            <div className="widget__hidden">
              <hr />
              <table className="widget__table">
                <tr>
                  <td>Height</td>
                  <td>{height} Meter.</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{location}</td>
                </tr>
                <tr>
                  <td>Visitor</td>
                  <td>{visitor} k/year</td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Yes</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
