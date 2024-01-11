import UserCard from "./UserCard";
import "./UserPage.css";

export default function UserPage() {
  return (
    <>
      <UserCard />
      <UserPageUpper />
    </>
  );
}

export function UserPageUpper() {
  return (
    <>
      <div class="UserProfile-profile">
        {/* <!-- Start Data --> */}

        <div class="UserProfile-data">
          <div class="UserProfile-image">
            <img src="https://i.postimg.cc/J0mh8Ybz/man.png" alt="" />
            <h4>Level 8</h4>
            <div class="UserProfile-progress">
              <span></span>
            </div>
            <p>
              <span>25</span> Points To The Next Level
            </p>
          </div>
          <div class="UserProfile-info">
            <h2>Mohamed Anwar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit
            </p>
            <p>140 Days In The Ship</p>
          </div>
        </div>

        {/* <!-- End Data --> */}

        <hr />

        {/* <!-- Start Points --> */}

        <div class="UserProfile-points">
          <h3>Points Log</h3>
          <ul>
            <li>
              Got <span>25</span> Points For <span>Completing quest</span> #118
            </li>
            <li>
              Got <span>120</span> Points For <span>Passing Hunting Exam</span>{" "}
              Three
            </li>
            <li>
              Got <span>40</span> Points For <span>Completing quest</span> #40
            </li>
          </ul>
        </div>

        {/* <!-- End Points --> */}

        <hr />

        {/* <!-- Start Trophies --> */}

        <div class="UserProfile-trophies">
          <h3>Trophies</h3>
          <div class="UserProfile-holder">
            <img src="https://i.postimg.cc/X7vdGg9s/1.jpg" alt="" />
            <img src="https://i.postimg.cc/GtXDgBnP/2.jpg" alt="" />
            <img src="https://i.postimg.cc/tCmPhV5p/3.jpg" alt="" />
            <img
              src="https://i.postimg.cc/NGDRjn2y/4.jpg"
              class="UserProfile-opacity"
              alt=""
            />
            <img src="https://i.postimg.cc/qRL6gtqf/5.jpg" alt="" />
            <img src="https://i.postimg.cc/pLwFSb4S/6.jpg" alt="" />
            <img src="https://i.postimg.cc/43p9k2Tx/7.jpg" alt="" />
            <img src="https://i.postimg.cc/zB5RJwJS/8.jpg" alt="" />
            <img
              src="https://i.postimg.cc/X7vdGg9s/1.jpg"
              class="UserProfile-opacity"
              alt=""
            />
            <img src="https://i.postimg.cc/GtXDgBnP/2.jpg" alt="" />
            <img src="https://i.postimg.cc/tCmPhV5p/3.jpg" alt="" />
            <img src="https://i.postimg.cc/NGDRjn2y/4.jpg" alt="" />
            <img
              src="https://i.postimg.cc/qRL6gtqf/5.jpg"
              class="UserProfile-opacity"
              alt=""
            />
            <img src="https://i.postimg.cc/pLwFSb4S/6.jpg" alt="" />
            <img src="https://i.postimg.cc/43p9k2Tx/7.jpg" alt="" />
            <img src="https://i.postimg.cc/zB5RJwJS/8.jpg" alt="" />
            <img src="https://i.postimg.cc/X7vdGg9s/1.jpg" alt="" />
            <img
              src="https://i.postimg.cc/GtXDgBnP/2.jpg"
              class="UserProfile-opacity"
              alt=""
            />
            <img
              src="https://i.postimg.cc/tCmPhV5p/3.jpg"
              class="UserProfile-opacity"
              alt=""
            />
            <img src="https://i.postimg.cc/NGDRjn2y/4.jpg" alt="" />
          </div>
        </div>

        {/* <!-- End Trophies --> */}

        <hr />

        {/* <!-- Start News --> */}

        <div class="UserProfile-news">
          <h3>Ladder News</h3>
          <p>
            Your Rank In Pirates Leaderboard Changed From <span>65</span> To{" "}
            <span>37</span> Congrats:)
          </p>
        </div>

        {/* <!-- End News --> */}

        <hr />

        {/* <!-- Start Powers --> */}

        <div class="UserProfile-powers">
          <h3>Your Powers</h3>
          <ul>
            <li>
              Invite Three Members To The Club
              <span class="UserProfile-yes">Yes</span>
            </li>
            <li>
              Open Treasure Chests Without Lock Pick
              <span class="UserProfile-yes">Yes</span>
            </li>
            <li>
              Use The Stickers In Comments
              <span class="UserProfile-no">No</span>
            </li>
            <li>
              Open Sea Is Available
              <span class="UserProfile-yes">Yes</span>
            </li>
            <li>
              Join Hunting Pirates Program
              <span class="UserProfile-no">No</span>
            </li>
            <li>
              Add Hunting Quest
              <span class="UserProfile-yes">Yes</span>
            </li>
          </ul>
        </div>

        {/* <!-- End News --> */}
      </div>
    </>
  );
}
