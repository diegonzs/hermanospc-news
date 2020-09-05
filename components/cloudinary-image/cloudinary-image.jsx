import * as React from 'react';

/**
 * @typedef {Object} CloudinaryImageProps
 * @property {string} cloudinaryId - cloduinary public id image
 * @property {string} bigSize - pixels for big image
 * @property {string} smallSize - pixels for small image
 * @property {string} [customClassName] - Custom class name for styles
 */

/**
 * @param {CloudinaryImageProps} props
 */
export const CloudinaryImage = ({
	cloudinaryId,
	bigSize,
	smallSize,
	customClassName,
}) => {
	return (
		<img
			sizes={`(max-width: 500px) ${smallSize}px, ${bigSize}px`}
			srcSet={`
				https://res.cloudinary.com/tribuagency/image/upload/f_auto,q_70,w_${smallSize}/${cloudinaryId} ${smallSize}w,
				https://res.cloudinary.com/tribuagency/image/upload/f_auto,q_70,w_${bigSize}/${cloudinaryId} ${bigSize}w
			`}
			src={`https://res.cloudinary.com/tribuagency/image/upload/f_auto,q_70,w_${bigSize}/${cloudinaryId}`}
			className={customClassName}
		/>
	);
};
