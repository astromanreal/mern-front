import Blogpage from "../Blogs/Blogpage";
import "./Style/Blogs.css";

export default function Blogs() {
  return (
    <>
      <div class="Email-article">
        <div class="Blog-main-container">
          <div class="Email-data">
            <div class="Email-text">
              <h2>Article Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button type="button" name="button">
                Learn More
              </button>
            </div>
            <img
              src="https://i.postimg.cc/MT5jThSm/laurent-b-bG3M_acL-Ao-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Blogpage />
    </>
  );
}
