import "./ListTemple.css";

export default function ListTemple() {
  return (
    <>
      <div class="ListTemple-featured">
        <div class="ListTemple-container">
          <div class="ListTemple-main-title">
            <h2>Featured Temples</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div class="ListTemple-lists">
            {/* <!-- Start List --> */}

            <div class="ListTemple-list">
              <div class="ListTemple-image">
                <img
                  src="https://i.postimg.cc/6q8FqFVg/element5-digital-uE2T1tCFsn8-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="ListTemple-text">
                <span class="ListTemple-type">Freelancer</span>
                <h3>Development Team Lead</h3>
                <div class="ListTemple-info">
                  Publisher: <span>Osama Elzero</span>
                  In: <span>Development</span>
                  Date: 21.06.2016
                </div>
              </div>
              <div class="ListTemple-location">
                <span>Cairo</span>
                <span>Egypt</span>
              </div>
              <div class="ListTemple-price">
                <p>$1200 - $1300</p>
                <button type="button" name="button">
                  Make Offer
                </button>
              </div>
            </div>

            {/* <!-- End List -->

        <!-- Start List --> */}

            <div class="ListTemple-list">
              <div class="ListTemple-image">
                <img
                  src="https://i.postimg.cc/hvN6dMpj/goran-ivos-iacpoKgpBAM-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="ListTemple-text">
                <span class="ListTemple-type">Freelancer</span>
                <h3>Make my website responsive device compatible</h3>
                <div class="ListTemple-info">
                  Publisher: <span>Amanda Sun</span>
                  In: <span>Web Design</span>
                  Date: 16.06.2016
                </div>
              </div>
              <div class="ListTemple-location">
                <span>Giza</span>
                <span>Egypt</span>
              </div>
              <div class="ListTemple-price">
                <p>$200 - $340</p>
                <button type="button" name="button">
                  Make Offer
                </button>
              </div>
            </div>

            {/* <!-- End List -->

        <!-- Start List --> */}

            <div class="ListTemple-list">
              <div class="ListTemple-image">
                <img
                  src="https://i.postimg.cc/C55Fwv66/hope-house-press-leather-diary-studio-IOzk8YKDhYg-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="ListTemple-text">
                <span class="ListTemple-type">Part Time</span>
                <h3>Hiring Online English Teachers</h3>
                <div class="ListTemple-info">
                  Publisher: <span>Bob Sturan</span>
                  In: <span>Web Design</span>
                  Date: 14.06.2016
                </div>
              </div>
              <div class="ListTemple-location">
                <span>Antalya</span>
                <span>Turkey</span>
              </div>
              <div class="ListTemple-price">
                <p>$650/mo</p>
                <button type="button" name="button">
                  View Job
                </button>
              </div>
            </div>

            {/* <!-- End List -->

        <!-- Start List --> */}

            <div class="ListTemple-list">
              <div class="ListTemple-image">
                <img
                  src="https://i.postimg.cc/2jqzVt5C/new-data-services-0tSiofevpUs-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="ListTemple-text">
                <span class="ListTemple-type">Full Time</span>
                <h3>Looking Graphic Designer (Logo + UI)</h3>
                <div class="ListTemple-info">
                  Publisher: <span>Eman Mohamed</span>
                  In: <span>Web Design</span>
                  Date: 13.06.2016
                </div>
              </div>
              <div class="ListTemple-location">
                <span>New York</span>
                <span>United States</span>
              </div>
              <div class="ListTemple-price">
                <p>$1200/mo</p>
                <button type="button" name="button">
                  View Job
                </button>
              </div>
            </div>
            {/* 
        <!-- End List -->

        <!-- Start List --> */}

            <div class="ListTemple-list">
              <div class="ListTemple-image">
                <img
                  src="https://i.postimg.cc/tgCbySfQ/aga-putra-P_p4NGz5Cb4-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="ListTemple-text">
                <span class="ListTemple-type">Freelancer</span>
                <h3>Are you Typography Expert?</h3>
                <div class="ListTemple-info">
                  Publisher: <span>Samah Elsayed</span>
                  In: <span>Web Design</span>
                  Date: 11.06.2016
                </div>
              </div>
              <div class="ListTemple-location">
                <span>Alex</span>
                <span>Egypt</span>
              </div>
              <div class="ListTemple-price">
                <p>$56 - $90</p>
                <button type="button" name="button">
                  Make Offer
                </button>
              </div>
            </div>

            {/* <!-- End List -->/ */}

            {/* <!-- Start List --> */}

            <div class="ListTemple-list">
              <div class="ListTemple-image">
                <img
                  src="https://i.postimg.cc/76YF855x/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg"
                  alt=""
                />
              </div>
              <div class="ListTemple-text">
                <span class="ListTemple-type">Partnership</span>
                <h3>Looking Wordpress Developer for ThemeForest</h3>
                <div class="ListTemple-info">
                  Publisher: <span>John DOE</span>
                  In: <span>Web Design</span>
                  Date: 08.06.2016
                </div>
              </div>
              <div class="ListTemple-location">
                <span>Austin</span>
                <span>United States</span>
              </div>
              <div class="ListTemple-price">
                <p>-</p>
                <button type="button" name="button">
                  Contact
                </button>
              </div>
            </div>

            {/* <!-- End List --> */}
          </div>

          <button type="button" name="button" class="ListTemple-more">
            Load More
          </button>
        </div>
      </div>
    </>
  );
}
