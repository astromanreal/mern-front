import "./Testing.css";
import { Link } from "react-router-dom";

export default function Testing() {
  return (
    <>
      <FeaturedProductDetail />
      <WhyChooseUs />
      <Footer2 />
    </>
  );
}

export function FeaturedProductDetail() {
  return (
    <>
      <div class="FeaturedProductDetail-book">
        {/* <!-- Start Navbar --> */}

        <div class="FeaturedProductDetail-navbar">
          <ul>
            <li>
              <Link to="/">The Book Series</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">The Author</Link>
            </li>
            <li>
              <Link to="/">Free resources</Link>
            </li>
          </ul>
        </div>

        {/* <!-- End Navbar -->

  <!-- Start Content --> */}

        <div class="FeaturedProductDetail-content">
          <div class="FeaturedProductDetail-container">
            <h2>You Don't Know JavaScript</h2>

            {/* <!-- Start Cover --> */}

            <div class="FeaturedProductDetail-cover">
              <div class="FeaturedProductDetail-info">
                <q>
                  When you stive to comprehend your code. you create better work
                  and become better at what you do. The code isn't just your job
                  anymore. it's your craft. This is why I love Up & Going.
                </q>
                <span>
                  <b>-JENN LUKAS,</b>Frontend consultant
                </span>
                <h3>Kyle Simpson</h3>
              </div>
              <div class="FeaturedProductDetail-series">
                <h2>Complete Series</h2>
              </div>
              <div class="FeaturedProductDetail-image">
                <img
                  src="https://i.postimg.cc/Qt81KgWw/IMG-20210110-WA0000.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* <!-- End Cover -->

      <!-- Start Order --> */}

            <div class="FeaturedProductDetail-order">
              <ul>
                <li>Don't jsut drift through Javascript.</li>
                <li>Understand how javascript works</li>
                <li>Start your journey through the bumpy side of Javascript</li>
              </ul>
              <button>Order Your Copy Now</button>
            </div>

            {/* <!-- End Order --> */}
          </div>
        </div>

        {/* <!-- End Content -->

  <!-- Start Footer --> */}

        <div class="FeaturedProductDetail-footer">
          <p>The first ebook in the book series is absolutely free.</p>
          <button>Find Out More About This Offer</button>
        </div>

        {/* <!-- End Footer --> */}
      </div>
    </>
  );
}

export function WhyChooseUs() {
  return (
    <>
      <div class="WhyChooseUs-choose-us">
        <div class="WhyChooseUs-heading-area">
          <h2>Why Choose Us</h2>
          <p>
            Duis Posuere blandit orci sed tincidunt. Curabitur Porttitor nisi ac
            nunc ornare, in fringilla nisl blandit
          </p>
        </div>
        <div class="WhyChooseUs-image">
          <div class="WhyChooseUs-overlay"></div>
          <div class="WhyChooseUs-text">
            <h3>Quality & Professionalism</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

          {/* <!-- Start Box --> */}

          <div class="WhyChooseUs-box WhyChooseUs-one">
            <div class="WhyChooseUs-info">
              <h4>Everyday backups</h4>
              <p>
                Duis Posuere blandit orci sed tincidunt. Curabitur Porttitor
                nisi ac nunc ornare, in fringilla nisl blandit
              </p>
            </div>
            <div class="WhyChooseUs-imgs">
              <img src="https://i.postimg.cc/c408FbzW/data-storage.png" />
            </div>
          </div>

          {/* <!-- End Box -->

    <!-- Start Box --> */}

          <div class="WhyChooseUs-box WhyChooseUs-two">
            <div class="WhyChooseUs-info">
              <h4>27/4 Non Stop Work</h4>
              <p>
                Duis Posuere blandit orci sed tincidunt. Curabitur Porttitor
                nisi ac nunc ornare, in fringilla nisl blandit
              </p>
            </div>
            <div class="WhyChooseUs-imgs">
              <img src="https://i.postimg.cc/Y21WfHb8/network.png" />
            </div>
          </div>

          {/* <!-- End Box -->

    <!-- Start Box --> */}

          <div class="WhyChooseUs-box WhyChooseUs-three">
            <div class="WhyChooseUs-info">
              <h4>High Quality Equipment</h4>
              <p>
                Duis Posuere blandit orci sed tincidunt. Curabitur Porttitor
                nisi ac nunc ornare, in fringilla nisl blandit
              </p>
            </div>
            <div class="WhyChooseUs-imgs">
              <img src="https://i.postimg.cc/VLg0pFyC/servers.png" />
            </div>
          </div>

          {/* <!-- End Box -->

    <!-- Start Box --> */}

          <div class="WhyChooseUs-box WhyChooseUs-four">
            <div class="WhyChooseUs-info">
              <h4>High Quality Equipment</h4>
              <p>
                Duis Posuere blandit orci sed tincidunt. Curabitur Porttitor
                nisi ac nunc ornare, in fringilla nisl blandit
              </p>
            </div>
            <div class="WhyChooseUs-imgs">
              <img src="https://i.postimg.cc/T1q5RVpB/light-bulb.png" />
            </div>
          </div>

          {/* <!-- End Box --> */}
        </div>
      </div>
    </>
  );
}

export function Footer2() {
  return (
    <>
      <div class="Footer2-footer">
        <div class="Footer2-container">
          <div class="Footer2-top">
            <div class="Footer2-contact">
              <h2>Contact Us</h2>
              <p>
                Hi, we are always open for cooperation and suggestions, contact
                us in one of the ways below:
              </p>
              <div class="Footer2-data">
                <h3>PHONE NUMBER</h3>
                <span>+1 (800)060-07-30</span>
              </div>
              <div class="Footer2-data">
                <h3>EMAIL ADDRESS</h3>
                <span>us@example.com</span>
              </div>
              <div class="Footer2-data">
                <h3>OUR LOCATION</h3>
                <span>715 Fake Street, New York 10021 USA</span>
              </div>
              <div class="Footer2-data">
                <h3>WORKING HOURS</h3>
                <span>Mon-Sat 10:00pm - 7:00pm</span>
              </div>
            </div>
            <div class="Footer2-info">
              <h2>Information</h2>
              <ul>
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Brands</li>
                <li>Contact Us</li>
                <li>Returns</li>
                <li>Site Map</li>
              </ul>
            </div>
            <div class="Footer2-account">
              <h2>My Account</h2>
              <ul>
                <li>Store Location</li>
                <li>Order History</li>
                <li>Wish List</li>
                <li>Newsletter</li>
                <li>Special Offers</li>
                <li>Gift Certificates</li>
                <li>Affiliate</li>
              </ul>
            </div>
            <div class="Footer2-newsletter">
              <h2>Newsletter</h2>
              <p>
                Enter your email address below to subscribe to our newsletter
                and keep up to date with discounts and special offers.
              </p>
              <input type="email" placeholder="user@example.com" />
              <button>Subscribe</button>
              <span>Follow us on social networks</span>
              <div class="Footer2-icons">
                <i class="fab fa-facebook-f fa-sm"></i>
                <i class="fab fa-twitter fa-sm"></i>
                <i class="fab fa-youtube fa-sm"></i>
                <i class="fab fa-instagram fa-sm"></i>
                <i class="fas fa-rss fa-sm"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Footer2-copyright">
        <div class="Footer2-container">
          <div class="Footer2-powered">
            powered by <span>Tech</span> - Designed by <span>Mohamed</span>
          </div>
          <div class="Footer2-company">
            <img src="https://i.postimg.cc/XvTfx0NK/paypal.png" />
            <img src="https://i.postimg.cc/DZLqMYm9/visa.png" />
            <img src="https://i.postimg.cc/K88D8NsT/american.png" />
            <img src="https://i.postimg.cc/jjW6zjTd/master.png" />
            <img src="https://i.postimg.cc/FHCgdL2B/maestro.png" />
          </div>
        </div>
      </div>
    </>
  );
}
