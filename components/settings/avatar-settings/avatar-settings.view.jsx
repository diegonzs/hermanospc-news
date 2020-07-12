import * as React from 'react';
import PropTypes from 'prop-types';

//@ts-ignore
import styles from './avatar-settings.module.scss';
//@ts-ignore
import userDefaultImage from '/images/default/user.png';

/**
 * @typedef {Object} AvatarSettingsViewProps
 * @property {string} avatar - src for the image tag.
 * @property {string} [username] - alt content for the img tag.
 */

/**
 * This component is in charge for only the visual part of the avatar options.
 * @param {AvatarSettingsViewProps} props
 */
export const AvatarSettingsView = ({ avatar, username }) => {
	return (
		<div className={styles.container}>
			<picture className={styles.imageContainer}>
				<img
					className={styles.image}
					src={avatar ? avatar : userDefaultImage}
					alt={username}
				/>
			</picture>
			<label className={styles.button}>Change</label>
		</div>
	);
};

AvatarSettingsView.propTypes = {
	/** src for the image tag. */
	avatar: PropTypes.string.isRequired,
	/** alt content for the img tag */
	username: PropTypes.string,
};
