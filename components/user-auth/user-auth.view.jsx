import * as React from 'react';
import PropTypes from 'prop-types';
import { WithUserUI } from './with-user-ui';
import { WithoutUserUI } from './without-user-ui';

/**
 * @typedef {Object} UserAuthViewProps
 * @property {boolean} isUserSignedIn - Flag to verify if the user is sined in.
 * @property {import('./with-user-ui/with-user-ui').WithUserUIProps} [userData] - The user data.
 */

/**
 * This component have the responsability to decide which UI to show.
 * @param {UserAuthViewProps} props
 */
export const UserAuthView = ({ isUserSignedIn, userData }) => {
	const [isLoading, setIsloaidng] = React.useState(true);

	React.useEffect(() => {
		setIsloaidng(false);
	}, []);

	if (isLoading) return null;

	if (isUserSignedIn && userData) {
		return <WithUserUI {...userData} />;
	} else {
		return <WithoutUserUI />;
	}
};

UserAuthView.propTypes = {
	/** The user data. */
	userData: PropTypes.shape({
		/** username */
		username: PropTypes.string.isRequired,
		/** avatar */
		avatar: PropTypes.string.isRequired,
		/** signout function */
		signout: PropTypes.func.isRequired,
	}),
	/** Flag to verify if the user is sined in. */
	isUserSignedIn: PropTypes.bool.isRequired,
};
