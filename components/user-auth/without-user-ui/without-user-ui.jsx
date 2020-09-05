import * as React from 'react';
import Link from 'next/link';
import { Row } from 'components/row';
import { Button } from 'components/button';

//@ts-ignore
import styles from './without-user-ui.module.scss';

/**
 * This component is used to show the user the options of signin and signup
 */
export const WithoutUserUI = () => {
	return (
		<Row
			id="without-user"
			isGrid={true}
			gap="24"
			customClass={styles.container}
		>
			<Link href="/signin">
				<a>
					<Button
						text="SIGN IN"
						onClickHandler={() => {
							return;
						}}
						isFilled={false}
						size="big"
						customClass={styles.button}
					/>
				</a>
			</Link>
			<Link href="/signup">
				<a>
					<Button
						text="SIGN UP"
						onClickHandler={() => {
							return;
						}}
						size="big"
						customClass={styles.button}
					/>
				</a>
			</Link>
		</Row>
	);
};
