import * as React from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
} from 'react-share';

export const ShareSwitch = ({ children, platform, url }) => {
	switch (platform) {
		case 'Facebook': {
			return <FacebookShareButton url={url}>{children}</FacebookShareButton>;
		}
		case 'Whatsapp': {
			return <WhatsappShareButton url={url}>{children}</WhatsappShareButton>;
		}
		case 'Twitter': {
			return <TwitterShareButton url={url}>{children}</TwitterShareButton>;
		}
		case 'Email': {
			return <EmailShareButton url={url}>{children}</EmailShareButton>;
		}
		case 'LinkedIn': {
			return <LinkedinShareButton url={url}>{children}</LinkedinShareButton>;
		}
		default: {
			return <FacebookShareButton url={url}>{children}</FacebookShareButton>;
		}
	}
};
