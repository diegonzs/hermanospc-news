import * as React from 'react';
import { PageContainer } from 'components/page-container';
import { Column } from 'components/column';
import { HeadPage } from 'components/head-page/head-page';
import { Settings as SettingsComponent } from 'components/settings';
import { OnlyUsers } from 'components/only-users';

//@ts-ignore
import smilyFaceIcon from '/images/icons/emoji-profile.png';

//@ts-ignore
import styles from 'styles/pages/settings.module.scss';
import { initMessaging, getFCMToken } from 'lib/firebase-messaging';

const Settings = ({ isServer }) => {
	const [notificationStatus, setNotificationStatus] = React.useState(false);

	const updateNotifications = async () => {
		if (notificationStatus) return;
		await initMessaging();
		const token = getFCMToken();
		if (token) {
			setNotificationStatus(true);
		}
	};

	React.useEffect(() => {
		if (getFCMToken()) {
			setNotificationStatus(true);
		}
	}, []);

	return (
		<OnlyUsers isServer={isServer}>
			<PageContainer>
				<Column gap="90" justify="center" customClass={styles.columnContainer}>
					<HeadPage title="Profile" icon={smilyFaceIcon} />
					<SettingsComponent
						userSettings={{
							email: 'diego.ags04@gmail.com',
							username: 'diegonzs',
							avatar: '',
						}}
						notificationSettings={{
							settings: [
								// {
								// 	title: 'Subscribe to Weekly Digest',
								// 	description: 'Our email summary every Monday',
								// 	id: 'fsdfsd',
								// 	isActive: true,
								// },
								{
									title: 'Push alert of last news',
									description: 'Receive notifications for relevant news',
									id: 'notifications',
									isActive: notificationStatus,
								},
							],
							updateSettings: (id) => {
								if (id === 'notifications') {
									updateNotifications();
								}
							},
						}}
					/>
				</Column>
			</PageContainer>
		</OnlyUsers>
	);
};

export default Settings;
