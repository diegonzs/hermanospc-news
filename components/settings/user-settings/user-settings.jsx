import * as React from 'react';
import PropTypes from 'prop-types';
import { InputSettings } from '../input-settings';
import { AvatarSettings } from '../avatar-settings';
import { Row } from 'components/row';

//@ts-ignore
import styles from './user-settings.module.scss';

/**
 * Component to show and give the posibility to the user to change all its personal data.
 * @param {UserSettingsProps} props
 */
export const UserSettings = ({ username, email, avatar }) => {
	return (
		<Row isGrid gap="64" align="flex-start" customClass={styles.container}>
			<AvatarSettings avatar={avatar} username={username} />
			<div className={styles.userInfoContainer}>
				<InputSettings id="username" defaultValue={username} />
				<InputSettings id="email" defaultValue={email} />
			</div>
		</Row>
	);
};

UserSettings.propTypes = {
	/** This is the current username */
	username: PropTypes.string.isRequired,
	/** This is the current email */
	email: PropTypes.string.isRequired,
	/** This is the current user avatar  */
	avatar: PropTypes.string,
};
