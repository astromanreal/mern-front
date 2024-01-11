import "./UserCard.css";

export default function UserCard() {
  return (
    <>
      <div class="UserCard-box">
        <img
          src="https://i.postimg.cc/59q7wQnW/fabian-albert-bl-NUhq-LC8o-unsplash.jpg"
          alt=""
        />
        <div class="UserCard-photo">
          <img
            src="https://i.postimg.cc/65tVwHrD/aron-van-de-pol-h-XOGHa-GCtd-A-unsplash.jpg"
            alt=""
          />
        </div>
        <div class="UserCard-content">
          <h2>Cool smartwatch</h2>
          <span class="UserCard-by">
            by <a href="#">Os Zero </a>
            <i class="fa-solid fa-tag"></i> <a href="#">Technology</a>
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam...
          </p>
          <div class="UserCard-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Egypt, Giza</span>
          </div>
          <div class="UserCard-progress">
            <span></span>
          </div>
          <div class="UserCard-info">
            <div class="unit">
              <span>50%</span>
              <span>funded</span>
            </div>
            <div class="UserCard-unit">
              <span>$5,000</span>
              <span>target</span>
            </div>
            <div class="UserCard-unit">
              <span>100</span>
              <span>days to go</span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Box Box --> */}
    </>
  );
}
