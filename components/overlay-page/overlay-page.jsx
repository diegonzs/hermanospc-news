import * as React from 'react';

//@ts-ignore
import styles from './overlay-page.module.scss';

/**
 * Use to hide pages the may appear without changing the page
 */
export const OverlayPage = ({ children, isActive }) => {
	return (
		<div className={`${styles.container} ${isActive ? styles.active : ''}`}>
			{isActive && (
				<style
					dangerouslySetInnerHTML={{ __html: ` body { overflow: hidden }` }}
				/>
			)}
			{children}
		</div>
	);
};
