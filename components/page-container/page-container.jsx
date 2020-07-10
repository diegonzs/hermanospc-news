import * as React from 'react';

//@ts-ignore
import styles from './page-container.module.scss';

/**
 * @typedef {Object} PageContainerProps
 * @property {string} [customClass]
 * @property {any} children
 */

/**
 * This component is the wrapper for all pages
 * @param {PageContainerProps} props
 */
export const PageContainer = ({ children, customClass }) => {
	return (
		<main className={`${styles.container} ${customClass}`}>{children}</main>
	);
};
