import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} ImageProps
 * @property {string} srcOriginal - Image source.
 * @property {string} srcWebp - Image source webp.
 * @property {string} type - Image type.
 * @property {string} alt - Image alt.
 * @property {string} [pictureClassName] - Picture className.
 * @property {string} [imgClassName] - Image className
 */

/**
 * Component use to display image if possible in webp.
 * @param {ImageProps} props 
 */
export const Image = ({ srcOriginal, srcWebp, type, alt="", pictureClassName, imgClassName }) => {
  return (
    <picture className={pictureClassName}>
      <source srcSet={srcWebp} type="image/wepb"/>
      <source srcSet={srcOriginal} type={`image/${type}`}/>
      <img srcSet={srcOriginal} alt={alt} className={imgClassName} />
    </picture>
  )
}

Image.propTypes = {
  /** Image oriignal source. */
  srcOriginal: PropTypes.string.isRequired,
  /** Image webp source. */
  srcWebp: PropTypes.string.isRequired,
  /** Image type. */
  type: PropTypes.string.isRequired,
  /** Image alt. */
  alt: PropTypes.string,
  /** picture tag className */
  pictureClassName: PropTypes.string,
  /** img tag className */
  imgClassName: PropTypes.string
}

Image.defaultProps = {
  alt: '',
}