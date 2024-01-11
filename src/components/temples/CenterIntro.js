import "./CenterIntro.css";

export default function CenterIntro() {
  return (
    <>
      <div class="CenterIntro-about">
        <div class="CenterIntro-image">
          <img
            src="https://i.postimg.cc/B6zjY0Nv/pexels-cesar-galeão-3253501.jpg"
            alt=""
          />
        </div>
        <div class="CenterIntro-content">
          <h2>We Are Here To Dream! Our Team Is Here Surve You.</h2>
          <span>about us</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="CenterIntro-imgs">
            <div class="CenterIntro-box">
              <img src="https://i.postimg.cc/28tPk88w/gym.png" alt="" />
              <h3>Visit Our Gym</h3>
            </div>
            <div class="CenterIntro-box">
              <img src="https://i.postimg.cc/BZMrzBrR/dumbbell.png" alt="" />
              <h3>Work Out</h3>
            </div>
            <div class="CenterIntro-box">
              <img src="https://i.postimg.cc/kXG0Pt9G/strongman.png" alt="" />
              <h3>Get Result</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
