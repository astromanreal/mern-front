import { Link } from "react-router-dom";
import "./Email.css";

export default function Email() {
  return (
    <>
      <div class="Email-main-container">
        <div class="Email-game">
          <div class="Email-container">
            <div class="Email-image"></div>
          </div>
        </div>

        <div class="Email-register">
          <div class="Email-container">
            <div class="Email-content">
              <h2>Start the journey of Jainism Now !</h2>
              <Link to="/explore">
                <button class="Email-cta">
                  <span>I'm ready!</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </Link>
            </div>
            <div class="Email-text">
              Jainism believes in the world of heavenly and hellish beings who
              are born, die and are reborn like earthly beings The souls who
              live happily in the body of a heavenly celestial do so because of
              their positive karma. Only a soul with human body can attain
              enlightenment and liberation.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
