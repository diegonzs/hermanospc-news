import React from 'react';
import { Column } from 'components/column/column';
import PropTypes from 'prop-types';
import { NewsContext, UserContext } from 'context';
import { useRouter } from 'next/router';

//@ts-ignore
import styles from './reactions.module.scss';

/**
 * @typedef {Object} reactionsProps
 * @property {number} data - number of likes/dislikes
 * @property {string} icon - like/dislike icon
 * @property {boolean} isActive - Tells if the user likes or dislikes
 * @property {boolean} isDisabled - Indicates if the reaction is disabled
 * @property {() => void} createReactionHandler - Handler to create a reaction
 * @property {boolean} [isBig] - Tells if the icon is big
 * @property {number} total - Total of reactions
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
	isBig = false,
	total,
}) => {
	const user = React.useContext(UserContext);
	const { justCloseOverlay } = React.useContext(NewsContext);
	const router = useRouter();
	const noUserReaction = () => {
		router.push('/signup');
		justCloseOverlay();
	};
	if (isBig) {
		return (
			<div
				className={`${styles.container} ${styles.containerBig} ${
					isActive ? styles.active : ''
				} ${isDisabled && user ? styles.disabled : ''}`}
				onClick={() => {
					isDisabled
						? user
							? null
							: noUserReaction()
						: createReactionHandler();
				}}
			>
				<Column gap="8" justify="center" width="35px">
					<img src={icon} />
					{isDisabled && total && user ? (
						<p>{Math.round((data / total) * 100)}%</p>
					) : null}
				</Column>
			</div>
		);
	}

	return (
		<div
			className={`${styles.container} ${isActive ? styles.active : ''} ${
				isDisabled && user ? styles.disabled : ''
			}`}
			onClick={() =>
				isDisabled ? (user ? null : noUserReaction()) : createReactionHandler()
			}
		>
			<Column gap="8" justify="center" width="35px">
				{isDisabled && total && user ? (
					<p>{Math.round((data / total) * 100)}%</p>
				) : null}
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
	/** Tells if the icon is big */
	isBig: PropTypes.bool,
};

ReactionsView.defaultProps = {
	data: 0,
	icon: '/images/example/thumbs-up.png',
	isDisabled: false,
	isBig: false,
};
