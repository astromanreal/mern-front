import "./Pooja.css";

export default function Pooja() {
  return (
    <>
      <PoojaIntro />
      <PoojaParallax />
      <PoojaNewslatter />
    </>
  );
}

export function PoojaIntro() {
  return (
    <>
      <div class="poo-intro-container">
        <div class="poo-intro-bigsidebar">
          <div class="poo-intro-sidebar">
            <h1>HELLO I AM POOJA</h1>
            <p>
              I'M A CREATIVE WEB DEVELOPER I STAND ON A SWEET SPOT WHERE DESIGN
              & CODE INTERSECTS.
            </p>
          </div>
        </div>
        <div class="poo-intro-content">
          <p>
            my 5+ years of experience in web design has given me an eye for
            detail, a mind for creativity and a technical aptitude for UI
            development. Self-motivation and passion are what feeds my eager to
            learn front-end technologies. I strive to build responsive websites
            and intuitive digital experiences with semantic HTML5 markup, CSS3,
            JQuery, and JavaScript. Off the computer, I enjoy playing soccer and
            skateboarding.
          </p>
          <h1>My Works</h1>
          <div class="poo-intro-gridbox">
            <div class="poo-intro-griditem">
              <h2>GLC Solutions</h2>
              <p>
                GLC Solutions is a game changing technology consulting firm
                based out of Langley, BC. They help companies utilize and
                leverage technology for sustainable long term growth and
                profitability.
              </p>
              <a href="#">Learn more..</a>
            </div>
            <div class="poo-intro-griditem">
              <h2>Wedler Engineering</h2>
              <p>
                Wedler Engineering is a results-oriented, value driven company
                that cultivates leadership and empowers people to do better and
                be better in their workplace and local community.
              </p>
              <a href="#">Learn more..</a>
            </div>
            <div class="poo-intro-griditem">
              <h2>Dovetail </h2>
              <p>
                Dovetail is a free, open source member management app for
                coworking spaces I built with Vince Hodges. Over 1,070 coworking
                spaces worldwide have created accounts
              </p>
              <a href="#">Learn more..</a>
            </div>
            <div class="poo-intro-griditem">
              <h2>UserForge</h2>
              <p>
                UserForge is a simple web app that helps people quickly create,
                share and iterate user personas for design projects. Alvin
                Engler and I are currently working on a 2.0 release.
              </p>
              <a href="#">Learn more..</a>
            </div>
            <div class="poo-intro-griditem">
              <h2>Designlab</h2>
              <p>
                Designlab is an online education platform that features
                project-based learning and 1-on-1 mentorship from industry
                experts. I mentor students in their UX Academy program
              </p>
              <a href="#">Learn more..</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PoojaParallax() {
  return (
    <>
      <div id="poo-parallax-main">
        <h1>Welcome to ArafPlays</h1>
        <p>Developer | Designer | Dumbass</p>
        <a href="#" class="poo-parallax-button">
          Learn More
        </a>
      </div>

      <div class="poo-parallax-section poo-parallax-light">
        <h2>Section One</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae vitae
          doloremque debitis, dolor corporis ex, doloribus quia voluptates atque
          necessitatibus facilis sapiente, itaque non. Repudiandae, recusandae
          illo, esse explicabo doloribus quod vitae eveniet delectus blanditiis
          obcaecati, sapiente pariatur incidunt dolor neque quam exercitationem
          amet? Repellendus fuga aspernatur placeat laudantium?
        </p>
      </div>

      <div id="poo-parallax-projects">
        <h1>Some Projects of Mine</h1>
        <p>Checkout my projects</p>
        <a href="#" class="poo-parallax-button">
          View More
        </a>
      </div>

      <div class="poo-parallax-section poo-parallax-dark">
        <h2>Section Two</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eum
          laboriosam. Autem deleniti tempora atque, voluptatem veniam porro
          quasi iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          quae vitae doloremque debitis, dolor corporis ex, doloribus quia
          voluptates atque necessitatibus facilis sapiente, itaque non.
          Repudiandae, recusandae illo, esse explicabo doloribus quod vitae
          eveniet delectus blanditiis obcaecati, sapiente pariatur incidunt
          dolor neque quam exercitationem amet? Repellendus fuga aspernatur
          placeat laudantium?
        </p>
      </div>
    </>
  );
}
export function PoojaNewslatter() {
  return (
    <>
      <div class="poo-newslatter-section-2">
        <div class="poo-newslatter-container">
          <div class="poo-newslatter-section-2-container">
            <div class="poo-newslatter-section-2-container-1">
              <img
                src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513623325/photo--2_gfpndg.jpg"
                alt="Typing pic"
              />
              <p class="poo-newslatter-section-2-container-1-heading">
                Clean Design
              </p>
              <h2>MailChimp ready</h2>
              <p class="section-2-container-1-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                quas! Quo, nesciunt quos. Dolore quaerat id aspernatur!
              </p>
            </div>
            <div class="poo-newslatter-section-2-container-2">
              <img
                src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513623324/photo--3_pk8oe1.jpg"
                alt="laptop pic"
              />
              <p class="poo-newslatter-section-2-container-2-heading">
                Blade Agency
              </p>
              <h2>Premium quality</h2>
              <p class="poo-newslatter-section-2-container-2-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit fugit, saepe libero expedita in nemo modi unde!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="poo-newslatter-section-3">
        <div class="poo-newslatter-container">
          <h1 class="poo-newslatter-section-3-heading">
            We are creative agency
          </h1>
          <h3 class="poo-newslatter-section-3-sub"> Powerful features</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            maxime laboriosam facilis impedit omnis hic voluptatibus, pariatur
            velit porro quas voluptas iusto, maiores minus eum quisquam eveniet
            error dolorem distinctio.voluptatibus, pariatur velit porro quas
            voluptas iusto, maiores minus eum quisquam eveniet error dolorem
            distinctio
          </p>

          <div class="poo-newslatter-section-3-icons">
            <div class="poo-newslatter-section-3-icons-icon">
              <i class="fa fa-desktop" aria-hidden="true"></i>
              <h3>Responsive</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, eaque!
              </p>
            </div>
            <div class="poo-newslatter-section-3-icons-icon">
              <i class="fa fa-heart" aria-hidden="true"></i>
              <h3>Support</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora, tenetur!
              </p>
            </div>
            <div class="poo-newslatter-section-3-icons-icon">
              <i class="fa fa-star" aria-hidden="true"></i>
              <h3>Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                debitis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="poo-newslatter-background-parallex">
        <div class="poo-newslatter-container">
          <h1>We are creative agency</h1>
          <h3>Powerful features</h3>
        </div>
      </section>

      <div class="poo-newslatter-section-4">
        <div class="poo-newslatter-section-4-grid">
          <div class="poo-newslatter-section-4-grid-image">
            <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513675289/photo--5_cd1rpy.jpg" />
          </div>
          <div class="poo-newslatter-section-4-grid-content">
            <h3>App development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus consequuntur ullam ab excepturi molestias!
            </p>
            <a href="#">See more</a>
          </div>
        </div>
        <div class="poo-newslatter-section-4-grid">
          <div class="poo-newslatter-section-4-grid-content poo-newslatter-section-4-grid-content-1">
            <h3>Blade agency</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sequi architecto. Hic est quaerat doloremque
              voluptate aperiam.
            </p>
            <a href="#">See more</a>
          </div>
          <div class="poo-newslatter-section-4-grid-image poo-newslatter-section-4-grid-image-1">
            <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513675291/photo--6_nspwfu.jpg" />
          </div>
        </div>
      </div>

      <div class="poo-newslatter-section-5">
        <div class="poo-newslatter-section-5-cards">
          <div class="poo-newslatter-section-5-cards-card">
            <h3>
              <i class="fa fa-cloud" aria-hidden="true"></i> User friendly
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              nostrum amet ipsa quos itaque dolor?
            </p>
          </div>
          <div class="poo-newslatter-section-5-cards-card">
            <h3>
              <i class="fa fa-code" aria-hidden="true"></i> Code Quality
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              ullam perspiciatis reiciendis quibusdam nesciunt illo?
            </p>
          </div>
        </div>
      </div>

      <div class="poo-newslatter-section-6">
        <h1 class="poo-newslatter-section-6-heading">Portfolio</h1>
        <p class="poo-newslatter-section-6-sub">We are creative agency</p>
        <div class="poo-newslatter-container">
          <p class="poo-newslatter-section-6-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            voluptate cum deserunt adipisci enim eius cupiditate nostrum
            provident assumenda earum.
          </p>
        </div>
        <div class="poo-newslatter-container">
          <div class="poo-newslatter-section-6-cards">
            <div class="poo-newslatter-section-6-cards-card">
              <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513688603/survey-opinion-research-voting-fill-159353_ccuqkq.jpg" />
            </div>
            <div class="poo-newslatter-section-6-cards-card">
              <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513688603/pexels-photo-697059_c6tuij.jpg" />
            </div>
            <div class="poo-newslatter-section-6-cards-card">
              <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513688603/pexels-photo-407233_sduc6w.jpg" />
            </div>
            <div class="poo-newslatter-section-6-cards-card">
              <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513688603/pexels-photo-373076_cfgy7s.jpg" />
            </div>
            <div class="poo-newslatter-section-6-cards-card">
              <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513688605/pexels-photo-296878_im13ro.jpg" />
            </div>
            <div class="poo-newslatter-section-6-cards-card">
              <img src="http://res.cloudinary.com/dbahgtgfu/image/upload/v1513688604/pexels-photo-95916_jafh1m.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="poo-newslatter-section-7">
        <div class="poo-newslatter-container">
          <h1 class="poo-newslatter-section-7-heading">
            What they say about us
          </h1>
          <h3 class="poo-newslatter-section-7-sub">Powerful features</h3>
          <p class="poo-newslatter-section-7-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            impedit autem eligendi perspiciatis ea, numquam sed aspernatur
            dolores, non distinctio, architecto dolorem optio! Modi iure
            assumenda amet nesciunt. Cum, totam?
          </p>
          <div class="poo-newslatter-section-7-about">
            <img src="https://inst.eecs.berkeley.edu/~cs194-26/fa15/upload/files/proj5/cs194-cd/images/clooney.jpg" />
            <p>Founder &amp; CEO at Evanto</p>
          </div>
          <div class="poo-newslatter-section-7-grid">
            <div class="poo-newslatter-section-7-grid-card">
              <h2>1409</h2>
              <h4>Projects</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, distinctio.
              </p>
            </div>
            <div class="poo-newslatter-section-7-grid-card">
              <h2>840</h2>
              <h4>Awards</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, earum.
              </p>
            </div>
            <div class="poo-newslatter-section-7-grid-card">
              <h2>242</h2>
              <h4>Client</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, hic.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="poo-newslatter-section-8">
        <div class="poo-newslatter-container">
          <h3>We are creative agency</h3>
          <h1>Powerful features</h1>
          <button>Learn more</button>
        </div>
      </div>
      <div class="poo-newslatter-section-8-contents">
        <div class="poo-newslatter-section-8-contents-content">
          <h3>About Us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium voluptatum dolores in numquam qui recusandae!
          </p>
          <button>Subscribe Us</button>
        </div>
        <div class="poo-newslatter-section-8-contents-content">
          <h3>Contact Us</h3>
          <h4>Address:</h4>
          <p>123 2090 Royal lane, Missisipi</p>
          <h4>Phone Number and Email:</h4>
          <p>123-456-123</p>
          <p>name@website.com</p>
        </div>
      </div>
    </>
  );
}
