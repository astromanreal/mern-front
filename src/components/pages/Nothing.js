import React from "react";
import { Link } from "react-router-dom";

export default function Nothing() {
  return (
    <>
   
      <div className=" center-404">
        <h1>You lost your orbit!!</h1>
        <h3>The page is not ready yet..</h3>
        <h5>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </h5>
        <Link to="/">
          <button className="Nothing-back-to-home">Go to Home again!!!</button>
        </Link>
      </div>
    </>
  );
}
