import * as React from 'react';
import { Column } from 'components/column';

//@ts-ignore
import thumbsUpIcon from '/images/example/thumbs-up.png';
//@ts-ignore
import thumbsUpIconWebp from '/images/example/thumbs-up.png?webp';
//@ts-ignore
import thumbsDownIcon from '/images/example/thumbs-down.png';
//@ts-ignore
import thumbsDownIconWebp from '/images/example/thumbs-down.png?webp';
//@ts-ignore
import styles from './reaction.module.scss';
import { Row } from 'components/row';
import { Image } from 'components/image';

export const Reactions = () => {
	return (
		<Column gap="32" align="center" customClass={styles.container}>
			<p className={styles.description}>Do you like this new?</p>
			<Row>
				<Column
					gap="24"
					align="center"
					justify="flex-start"
					customClass={styles.iconContainer}
				>
					<Image
						srcOriginal={thumbsUpIcon}
						srcWebp={thumbsUpIconWebp}
						pictureClassName={styles.picture}
						type="png"
					/>
					<span className={styles.counter}>314</span>
				</Column>
				<Column
					gap="24"
					align="center"
					justify="flex-end"
					customClass={styles.iconContainer}
				>
					<Image
						srcOriginal={thumbsDownIcon}
						srcWebp={thumbsDownIconWebp}
						pictureClassName={styles.picture}
						type="png"
					/>
					<span className={styles.counter}>23</span>
				</Column>
			</Row>
		</Column>
	);
};
