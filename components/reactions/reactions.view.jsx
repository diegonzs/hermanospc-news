import React from 'react';
import { Column } from 'components/column/column';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './reactions.module.scss';
/**
 * @typedef {Object} reactionsProps
 * @property {number} data - number of likes/dislikes
 * @property {string} icon - like/dislike icon
 * @property {boolean} isActive - Tells if the user likes or dislikes
 * @property {boolean} isDisabled - Indicates if the reaction is disabled
 * @property {() => void} createReactionHandler - Handler to create a reaction
 */

/**
 * This is the main news card component for the news section
 * @param {reactionsProps} props
 */
export const ReactionsView = ({
	data,
	icon,
	isActive,
	isDisabled,
	createReactionHandler,
}) => {
	return (
		<div
			className={`${styles.container} ${isActive && styles.active} ${
				isDisabled && styles.disabled
			}`}
			onClick={() => (isDisabled ? null : createReactionHandler())}
		>
			<Column gap="8" justify="center" width="35px">
				<p>{data}</p>
				<img src={icon} />
			</Column>
		</div>
	);
};
ReactionsView.propTypes = {
	/**  number of likes/dislikes */
	data: PropTypes.number,
	/**  like/dislike icon */
	icon: PropTypes.string,
	/** Tells if the user likes or dislikes */
	isActive: PropTypes.bool.isRequired,
	/** Indicates if the reaction is disabled */
	isDisabled: PropTypes.bool.isRequired,
	/** Handler to create a reaction */
	createReactionHandler: PropTypes.func.isRequired,
};

ReactionsView.defaultProps = {
	data: 0,
	icon: '/images/example/thumbs-up.png',
	isDisabled: false,
};
