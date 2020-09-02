import * as React from 'react';
import PropTypes from 'prop-types';
import { NotificationOption } from '../notification-option';
import { Row } from 'components/row';

//@ts-ignore
import bellIcon from '/images/icons/bell.png';
//@ts-ignore
import styles from './notification-settings.module.scss';
import { Button } from 'components/button';
import { SourcesSelection } from 'components/sources-selection';
import { UserContext } from 'context';

/**
 * This component shows all the visual for notification settings
 * @param {NotificationSettingsProps} props
 */
export const NotificationSettings = ({ settings, updateSettings }) => {
	const [showSourcesList, setShowSourcesList] = React.useState(false);
	const user = React.useContext(UserContext);
	return (
		<div className={styles.container}>
			<Row isGrid={true} gap="24">
				<p className={styles.title}>Notifications</p>
				<picture className={styles.icon}>
					<img src={bellIcon} alt="bell" />
				</picture>
			</Row>
			<div className={styles.notificationList}>
				{settings.map((s) => (
					<NotificationOption
						key={s.id}
						id={s.id}
						isActive={s.isActive}
						title={s.title}
						description={s.description}
						updateSettings={() => updateSettings(s.id)}
					/>
				))}
			</div>
			<Row isGrid={true} gap="24">
				<p className={styles.title}>News Sources</p>
				{/* <picture className={styles.icon}>
					<img src={bellIcon} alt="bell" />
				</picture> */}
			</Row>
			<Button text="Manage" onClickHandler={() => setShowSourcesList(true)} />
			{showSourcesList && (
				<SourcesSelection
					userId={user.uid}
					onDone={() => setShowSourcesList(false)}
					title="List of news sources"
					description="Pick your favorites"
				/>
			)}
		</div>
	);
};

NotificationSettings.propTypes = {
	/** List of settings. */
	settings: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			isActive: PropTypes.bool.isRequired,
		})
	).isRequired,
	/** Function to update setting's state. */
	updateSettings: PropTypes.func.isRequired,
};
