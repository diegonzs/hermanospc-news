import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { Row } from 'components/row';

// @ts-ignore
import leftArrow from '/images/chevron-left.svg';
// @ts-ignore
import styles from './back-button.module.scss';

/**
 * @typedef {Object} BackButtonProps
 * @property {string} text - The text that would be insie de button.
 * @property {() => void} [handleClick] - Function to handle the default onClick method
 */

/**
 * This buttons is used to return to the root of the page
 * @param {BackButtonProps} props
 */

export const BackButton = ({ text, handleClick }) => {
	return (
		<div className={styles.BackButtonContainer}>
			{handleClick ? (
				<div onClick={() => handleClick()}>
					<Row justify="flex-start">
						<SVG className={styles.svg} src={leftArrow} />
						<span>{text}</span>
					</Row>
				</div>
			) : (
				<Link href="/">
					<a>
						<Row justify="flex-start">
							<SVG className={styles.svg} src={leftArrow} />
							<span>{text}</span>
						</Row>
					</a>
				</Link>
			)}
		</div>
	);
};

BackButton.propTypes = {
	/** The text that would be insie de button */
	text: PropTypes.string.isRequired,
	/** Function to handle the default onClick method */
	handleClick: PropTypes.func,
};
