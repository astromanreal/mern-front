import "./Fixnav.css";
import { Link } from "react-router-dom";

export default function Fixnav() {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="donate">
              <li>Donate</li>
            </Link>
            <Link to="community">
              <li>Community</li>
            </Link>
            <Link to="blog">
              <li>Blogs</li>
            </Link>
            <Link to="connect">
              <li>Join us!</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
