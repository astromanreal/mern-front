import React from "react";
import Logsign from "../connect/Logsign";
import Contactform from "../connect/Contactform";

export default function Connect() {
  return (
    <>
      <div className="scr-connect my-container">
        <Logsign />
        <Contactform />
      </div>
    </>
  );
}
