import * as React from 'react';
// import { Image } from 'components/image';
// import SVG from 'react-inlinesvg';
//@ts-ignore
// import logo from '/images/brand/hermanospc-logo-small.svg';
//@ts-ignore
import styles from './loading-page.module.scss';
import { Loader } from 'components/loader';

export const LoadingPage = () => {
	return (
		<div className={styles.loadingContainer}>
			{/* <Loader /> */}
			<img src="/brand/maskable-icon-RGB.png" alt="HPC Logo" />
			{/* <SVG src={logo} className={styles.image} cacheRequests={true} /> */}
		</div>
		// <h1>CARGANDO....</h1>
	);
};
