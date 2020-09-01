import * as React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
// import { Form } from './form';

//@ts-ignore
import styles from './sign.module.scss';
//@ts-ignore
import googleIcon from 'public/images/svgs/google-icon.svg';
//@ts-ignore
import twitterIcon from 'public/images/svgs/twitter.svg';
//@ts-ignore
import facebookIcon from 'public/images/svgs/facebook.svg';

const providers = {
	google: {
		provider: 'Continue with Google',
		icon: googleIcon,
		slug: 'google',
	},
	twitter: {
		provider: 'Continue with Twitter',
		icon: twitterIcon,
		slug: 'twitter',
	},
	facebook: {
		provider: 'Continue with Facebook',
		icon: facebookIcon,
		slug: 'facebook',
	},
};

/**
 * Sign Form it can be used as Sign-In and Sign-Up forms.
 * @param {SignProps} props - Props
 */
export const Sign = ({
	title,
	buttonText,
	handleSubmit,
	changeFormText,
	changeFormPath,
	handleSigninProvider,
	hasTick,
	errorMsg,
	isLoading,
}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>
				Stay updated on any relevant new in the PC industry
			</p>
			<ul className={styles.socialList}>
				{['google', 'twitter', 'facebook'].map((p) => (
					<li key={p} onClick={() => handleSigninProvider(providers[p].slug)}>
						<SVG src={providers[p].icon} />
						<span>{providers[p].provider}</span>
					</li>
				))}
			</ul>
			{/* <div className={styles.separator}>
				<span>or continue with email</span>
			</div>
			<Form
				buttonText={buttonText}
				handleSubmit={handleSubmit}
				changeFormPath={changeFormPath}
				changeFormText={changeFormText}
				hasTick={hasTick}
				isLoading={isLoading}
			/> */}
			{!!errorMsg && (
				<div className={styles.errorBox}>
					<p>{errorMsg}</p>
				</div>
			)}
		</div>
	);
};

Sign.propTypes = {
	/** Title to be display at the top of the component */
	title: PropTypes.string.isRequired,
	/** Text that would go inside the submit button */
	buttonText: PropTypes.string.isRequired,
	/** handle for the submit event on the form */
	handleSubmit: PropTypes.func.isRequired,
	/** Text to show in the chanche form link */
	changeFormText: PropTypes.string.isRequired,
	/** Path to redirect the user */
	changeFormPath: PropTypes.string.isRequired,
};
