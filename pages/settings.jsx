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
import { NetworkStatus } from '@apollo/client';
import {
	FETCH_ALL_SOURCES_VARIABLES,
	FETCH_USER_SOURCES,
} from 'graphql/queries/sources';
import { UserContext } from 'context';
import { Loader } from 'components/loader';
import { useSwrQuery } from 'hooks';

const Settings = ({ isServer }) => {
	const [notificationStatus, setNotificationStatus] = React.useState(false);
	const user = React.useContext(UserContext);

	const { data, loading, networkStatus } = useSwrQuery(FETCH_USER_SOURCES, {
		variables: FETCH_ALL_SOURCES_VARIABLES(user ? user.uid : ''),
		fetchPolicy: 'cache-and-network',
		notifyOnNetworkStatusChange: true,
	});

	const updateNotifications = async () => {
		if (notificationStatus) return;
		await initMessaging();
		const token = getFCMToken();
		if (token) {
			setNotificationStatus(true);
			if (data && data.users_sources) {
				const topics = data.users_sources
					.filter((elem) => elem.is_notification_on)
					.map((source) => source.links_source.slug);
				try {
					fetch('/api/fcm-register-topic', {
						method: 'POST',
						body: JSON.stringify({
							token,
							topics,
						}),
					});
				} catch (error) {
					console.log({ error });
				}
			}
		}
	};

	React.useEffect(() => {
		if (getFCMToken()) {
			setNotificationStatus(true);
		}
	}, []);

	let userSources = [];

	if (data && data.users_sources) {
		userSources = data.users_sources;
	}

	return (
		<OnlyUsers isServer={isServer}>
			<PageContainer>
				<Column gap="90" justify="center" customClass={styles.columnContainer}>
					<HeadPage title="Profile" icon={smilyFaceIcon} />
					{loading || networkStatus === NetworkStatus.refetch ? (
						<Loader />
					) : (
						<SettingsComponent
							userSettings={{
								email: 'diego.ags04@gmail.com',
								username: 'diegonzs',
								avatar: '',
							}}
							notificationSettings={{
								settings: [
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
								userSources,
							}}
						/>
					)}
				</Column>
			</PageContainer>
		</OnlyUsers>
	);
};

export default Settings;
