import * as React from 'react';
// @ts-ignore
import styles from './footer.module.scss';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.list}>
				<li>
					<a href="https://hermanospc.co/legal" target="_blank" rel="noopener">
						Legal
					</a>
				</li>
				{/* <li><a href="https://hermanospc.co/ambassadors" target="_blank">Ambassadors</a></li> */}
			</ul>
			<p>© 2020. Hermanos PC.</p>
		</footer>
	);
};
