import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { Row } from 'components/row';

// @ts-ignore
import styles from './share-modal.module.scss';
// @ts-ignore
import facebookIcon from '/images/social/facebook.svg';
// @ts-ignore
import whatsappIcon from '/images/social/whatsapp.svg';
// @ts-ignore
import twitterIcon from '/images/social/twitter.svg';
// @ts-ignore
import emailIcon from '/images/social/envelope-open-text.svg';
// @ts-ignore
import linkedinIcon from '/images/social/linkedin.svg';
import { Column } from 'components/column';

const SocialLinks = [
	{
		link: 'https://facebook.com/hermanospc',
		icon: facebookIcon,
		text: 'Facebook',
	},
	{
		link: '#',
		icon: whatsappIcon,
		text: 'Whatsapp',
	},
	{
		link: 'https://twitter.com/hermanospc',
		icon: twitterIcon,
		text: 'Twitter',
		text2Style: true,
	},
	{
		link: '#',
		icon: emailIcon,
		text: 'Email',
	},
	{
		link: '#',
		icon: linkedinIcon,
		text: 'LinkedIn',
	},
];

/**
 * @typedef {Object} ShareModalProps
 * @property {() => void} closeModalHandler - Function use o close the modal
 */

/**
 * This Modal displays a list of social links, so the user can share the content
 * @param {ShareModalProps} props
 */
export const ShareModal = ({ closeModalHandler }) => {
	return (
		<div className={styles.ShareModalCont}>
			<div className={styles.title}>
				<span className={styles.share}>Share</span>
				<span className={styles.cancel} onClick={() => closeModalHandler()}>
					Cancel
				</span>
			</div>
			{/* <div className={styles.center}> */}
			<Column gap="18" customClass={styles.center}>
				{SocialLinks.map((value) => (
					<Row isGrid={true} gap="24" key={value.text}>
						<SVG src={value.icon} />
						<a href={value.link}>
							<span className={value.text2Style ? styles.text2 : styles.text}>
								{value.text}
							</span>
						</a>
					</Row>
				))}
			</Column>
			{/* </div> */}
		</div>
	);
};

ShareModal.propTypes = {
	closeModalHandler: PropTypes.func.isRequired,
};
