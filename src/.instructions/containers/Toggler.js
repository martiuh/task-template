import React, { useState } from "react";
import Instructions from "../Instructions";
import "./Toggler.scss";

const INSTRUCTIONS = "INSTRUCTIONS";
const APP = "APP";
const togglerBtnClass = "toggler__btn";

export default function Toggler({ children }) {
  const [status, setStatus] = useState(INSTRUCTIONS);
  const showInstructions = () => setStatus(INSTRUCTIONS);
  const showApp = () => setStatus(APP);

  const instructionsClassName = `${togglerBtnClass} ${
    status === INSTRUCTIONS ? "active" : ""
  }`;
  const appClassName = `${togglerBtnClass} ${status === APP ? "active" : ""}`;

  return (
    <div>
      <div className="toggler__bar">
        <button
          className={instructionsClassName}
          type="button"
          onClick={showInstructions}
        >
          Instructions <span aria-hidden>📖</span>
        </button>
        <button className={appClassName} type="button" onClick={showApp}>
          App <span aria-hidden>📱</span>
        </button>
      </div>
      {status === INSTRUCTIONS ? <Instructions /> : children}
    </div>
  );
}
