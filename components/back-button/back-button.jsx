import React from "react";
import Link from "next/link";
import PropsType from "prop-types";
import SVG from "react-inlinesvg";
import { Row } from "components/row";

// @ts-ignore
import leftArrow from "/images/chevron-left.svg";
// @ts-ignore
import styles from "./back-button.module.scss";

/**
 * @typedef {Object} BackButtonProps
 * @property {string} text - The text that would be insie de button.
 */

/**
 * This buttons is used to return to the root of the page
 * @param {BackButtonProps} props
 */

export const BackButton = ({ text }) => {
  return (
    <div className={styles.BackButtonContainer}>
      <Link href="/">
        <a>
          <Row justify="flex-start">
            <SVG className={styles.svg} src={leftArrow} />
            <span>{text}</span>
          </Row>
        </a>
      </Link>
    </div>
  );
};

BackButton.PropsType = {
  /*The text that would be insie de button*/
  text: PropsType.string.isRequired,
};
