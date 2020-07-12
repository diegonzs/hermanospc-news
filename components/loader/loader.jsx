import * as React from 'react';

//@ts-ignore
import styles from './loader.module.scss';

export const Loader = () => {
	return (
		<div className={styles.container}>
			<div className={styles.loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
