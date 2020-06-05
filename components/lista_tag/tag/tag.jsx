import React from 'react';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './tag.module.scss';
import { tagSimple } from './tag.stories';


/**
 * @typedef {Object} TagProps
 * @property {string} text - the text that would be in the tag
 */
/**
 * This is the tag component that will be used for the List Tag component
 * @param {TagProps} props
 */ 
export const Tag = ({ text }) => {
  return (
    <li className={styles.tag}>{text}</li>
  )
}

Tag.propTypes = {
    /** the text that would be in the tag */
    text: PropTypes.string.isRequired,
  }

 
