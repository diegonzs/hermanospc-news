import React from 'react';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './button.module.scss';

/**
 * @typedef {Object} ButtonProps
 * @property {string} text - The text that would be insie de button.
 * @property {function} onClickHandler - The on click handler.
 * @property {boolean} [isDisabled] - FLag to determine if the button has to be disabled.
 * @property {string} [color] - HEX value to change the default text color.
 * @property {string} [bgColor] - HEX value to change the default bg-color.
 * @property {string} [hoverColor] - HEX value to change the default bg-color when hovered.
 * @property {boolean} [isFilled] - Flat to determine if the button is filled or empty bg.
 * @property {"small" | "normal" | "big"} [size] - It defines the button size.
 */

/**
 * This buttons is used all over the place
 * @param {ButtonProps} props
 */

export const Button = ({ text, onClickHandler, isDisabled=false, color=styles.colorDark, bgColor=styles.colorPrimary, hoverColor="blue", isFilled=true, size="normal" }) => {
  const [isHover, setIsHover] = React.useState(false);
  let customStyles = {};
  customStyles.color = color;
  if (isFilled) {
    customStyles.border = 'none';
    if (isHover) {
      customStyles.backgroundColor = hoverColor;
    } else {
      customStyles.backgroundColor = bgColor;
    }
  } else {
    customStyles.backgroundColor = 'transparent';
    if (isHover) {
      customStyles.border = `2px solid ${hoverColor}`;
      customStyles.color = hoverColor;
    } else {
      customStyles.color = bgColor;
      customStyles.border = `2px solid ${bgColor}`;
    }
  }
  return (
    <button
      className={styles[`button-${size}`]}
      onClick={() => onClickHandler()}
      disabled={isDisabled}
      style={customStyles}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  /** The text that would be inside the button */
  text: PropTypes.string.isRequired,
  /** The on click handler */
  onClickHandler: PropTypes.func.isRequired,
  /** FLag to determine if the button has to be disabled */
  isDisabled: PropTypes.bool,
  /** HEX value to change the default text color. */
  color: PropTypes.string,
  /** HEX value to change the default bg-color. */
  bgColor: PropTypes.string,
  /** HEX value to change the default bg-color when hovered. */
  hoverColor: PropTypes.string,
  /** Flat to determine if the button is filled or empty bg. */
  isFilled: PropTypes.bool,
  /** It defines the button size. */
}

Button.defaultProps = {
  isDisabled: false,
  isFilled: true,
  color: styles.colorDark,
  bgColor: styles.colorPrimary,
  hoverColor: 'rgb(74, 255, 186)',
  size: 'normal',
}

