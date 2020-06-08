import React from "react";
// @ts-ignore
import styles from "./back-button.module.scss";
import SVG from "react-inlinesvg";
// @ts-ignore
import leftArrow from "/images/chevron-left.svg";
import PropsType from "prop-types";

export const BackButton = ({ text }) => {
  return (
    <div className={styles.BackButtonContainer}>
      <a href="/">
        <SVG className={styles.svg} src={leftArrow} />
        <span>{text}</span>
      </a>
    </div>
  );
};

BackButton.PropsType = {
  text: PropsType.string.isRequired,
};
