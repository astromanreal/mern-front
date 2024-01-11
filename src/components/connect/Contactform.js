import React from "react";
import "./Contactform.css";

export default function Contactform() {
  return (
    <>
      <div className="contact-container">
        <form id="contact" action="" method="post">
          <h3>Contact Form</h3>
          <h4>Contact us for personalize experience..</h4>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (optional)"
              type="tel"
              tabindex="3"
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Web Site (optional)"
              type="url"
              tabindex="4"
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here...."
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
