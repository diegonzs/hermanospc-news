import * as React from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
} from 'react-share';

export const ShareSwitch = ({ children, platform, url, title }) => {
	switch (platform) {
		case 'Facebook': {
			return (
				<FacebookShareButton url={url} quote={title}>
					{children}
				</FacebookShareButton>
			);
		}
		case 'Whatsapp': {
			return (
				<WhatsappShareButton url={url} title={title}>
					{children}
				</WhatsappShareButton>
			);
		}
		case 'Twitter': {
			return (
				<TwitterShareButton url={url} title={title}>
					{children}
				</TwitterShareButton>
			);
		}
		case 'Email': {
			return (
				<EmailShareButton url={url} subject={title}>
					{children}
				</EmailShareButton>
			);
		}
		case 'LinkedIn': {
			return (
				<LinkedinShareButton url={url} title={title} source="Hermanos PC News">
					{children}
				</LinkedinShareButton>
			);
		}
		default: {
			return (
				<FacebookShareButton url={url} quote={title}>
					{children}
				</FacebookShareButton>
			);
		}
	}
};
