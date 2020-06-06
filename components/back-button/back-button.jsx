import React from "react";
import "./back-button.css";
import SVG from "react-inlinesvg";
import leftArrow from "../../public/chevron-left.svg";

const BackButton = ({ text }) => {
  return (
    <div className="BackButtonContainer">
      <a href="/">
        <SVG className="svg" src={leftArrow} />
        <span>{text}</span>
      </a>
    </div>
  );
};

export default BackButton;
