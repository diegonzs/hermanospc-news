import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'components/image';
import { Row } from 'components/row';

//@ts-ignore
import styles from './title.module.scss';

/**
 * @typedef {Object} TitleProps
 * @property {string} text - the text that would be in the title
 * @property {string} [emoji] - emoji to animate the title
 * @property {string} [icon] - icon to animate the title
 */

/**
 * This is the title component for the news welcome screen
 * @param {TitleProps} props
 */

export const Title = ({ text, emoji="", icon }) => {
  return (
    <h1 className={styles.title}>
      <Row>
        {text}
        {icon
          ? <Image imgClassName={styles.image} srcOriginal={icon} srcWebp={icon} type="png" />
          : <span className={styles.emoji}>{emoji}</span>
        }
      </Row>
    </h1>
  )
}

Title.propTypes = {
  /** the text that would be in the title */
  text: PropTypes.string.isRequired,
  /** Emoji to animate the title */
  emoji: PropTypes.string,
  /** Icon to animate the title */
  icon: PropTypes.string,
}

Title.defaultProps = {
  emoji: '',
}