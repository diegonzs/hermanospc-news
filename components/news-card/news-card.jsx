import * as React from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
import styles from './news-card.module.scss';
import Link from 'next/link';

/**
 * Use to show tthe preview of a new
 * @param {NewsCardProps} props
 */
export const NewsCard = ({ title, image, source, howLong, link }) => {
  return (
    <Link href={link}>
      <a href={link} className={styles.container}>
        <img src={image} alt=""className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.row}>
          <span className={styles.source}>: {source}</span>
          <span className={styles.howLong}>{howLong}</span>
        </div>
      </a>
    </Link>
  )
}

NewsCard.propTypes = {
  /** Main image */
  image: PropTypes.string.isRequired,
  /** Title */
  title: PropTypes.string.isRequired,
  /** Source */
  source: PropTypes.string.isRequired,
  /** How long since posted */
  howLong: PropTypes.string.isRequired,
  /** Where it sends the user when clicked. */
  link: PropTypes.string.isRequired,
}