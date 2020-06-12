import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} ImageProps
 * @property {string} src - Image source.
 * @property {string} type - Image type.
 * @property {string} alt - Image alt.
 * @property {string} pictureClassName - Picture className.
 * @property {string} imgClassName - Image className
 */

/**
 * Component use to display image if possible in webp.
 * @param {ImageProps} props 
 */
export const Image = ({ src, type, alt, pictureClassName, imgClassName }) => {
  return (
    <picture className={pictureClassName}>
      <source srcSet={require(`${src}?webp`)} type="image/wepb"/>
      <source srcSet={require(`${src}`)} type={`image/${type}`}/>
      <img srcSet={require(`${src}`)} alt={alt} className={imgClassName} />
    </picture>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alt: PropTypes.string,
  pictureClassName: PropTypes.string,
  imgClassName: PropTypes.string
}