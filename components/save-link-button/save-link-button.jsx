import * as React from 'react';
import SVG from 'react-inlinesvg';

//@ts-ignore
import bookmarkIcon from '/images/svgs/bookmark.svg';
//@ts-ignore
import styles from './save-link-button.scss';

/**
 * @typedef {Object} SaveLinkButtonProps
 *
 */

/**
 * This component shows the current state of link if is saved or not
 * @param {*} param0
 */
export const SaveLinkButton = ({ isSaved, customClassName }) => {
	return (
		<div className={`${styles.container} ${customClassName}`}>
			<SVG src={bookmarkIcon} />
		</div>
	);
};
