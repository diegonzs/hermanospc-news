import React from 'react';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './title.module.scss';

/**
 * @typedef {Object} TitleProps
 * @property {string} text - the text that would be in the title
 * @property {string} [emoji] - emoji to animate the title
 */

/**
 * 
 * @param {TitleProps} props
 */

export const Title = ({ text, emoji }) => {
  return (
    <h1 className={styles.title}>{text} {emoji}</h1>
  )
}

Title.propTypes = {
    /** the text that would be in the title */
    text: PropTypes.string.isRequired,
    /** Emoji to animate the title */
    emoji: PropTypes.string,
  }

Title.defaultProps ={
    text: "WHAT'S HAPPENING",
  }
  