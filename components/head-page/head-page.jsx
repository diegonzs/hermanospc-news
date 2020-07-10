import * as React from 'react';
import PropTypes from 'prop-types';
import { BackButton } from 'components/back-button';
import { Row } from 'components/row';
import { Title } from 'components/title';
import { UserAuth } from 'components/user-auth';
import { Column } from 'components/column';

//@ts-ignore
import styles from './head-page.module.scss';

/**
 * @typedef {Object} HeadPageprops
 * @property {string} title - The display title.
 * @property {string} [emoji] - emoji display in the title.
 * @property {string} [icon] - icon to display in the title.
 * @property {boolean} [hasBack] - Determines if it should have a back button
 */

/**
 * This is posible head of all pages
 * @param {HeadPageprops} props
 */
export const HeadPage = ({ title, emoji = '', icon, hasBack = true }) => {
	const titleProps = {};
	titleProps.text = title;
	if (icon) {
		titleProps.icon = icon;
	} else {
		titleProps.emoji = emoji;
	}
	return (
		<div className={styles.container}>
			<Column gap="9">
				{hasBack && <BackButton text="All News" />}
				<Row customClass={styles.customRow}>
					<Title {...titleProps} />
					<UserAuth />
				</Row>
			</Column>
		</div>
	);
};

HeadPage.propTypes = {
	/** The display title. */
	title: PropTypes.string.isRequired,
	/** emoji display in the title. */
	emoji: PropTypes.string,
	/** icon display in the title. */
	icon: PropTypes.string,
	/** Determines if it should have a back button*/
	hasBack: PropTypes.bool,
};

HeadPage.defaultProps = {
	emoji: '',
	hasBack: true,
};
