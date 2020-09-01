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
import { Reactions } from 'components/reactions';

export const ReactionsForDetails = ({
	likes,
	reactions,
	user,
	id,
	dislikes,
}) => {
	return (
		<Column
			gap="32"
			align="center"
			justify="center"
			customClass={styles.container}
		>
			<p className={styles.description}>Do you like this new?</p>
			<Row isGrid={true} gap="32" justify="center">
				<Reactions
					data={likes.aggregate.count}
					icon="/images/example/thumbs-up-big.png"
					isActive={!!(reactions.length && reactions[0].emoji === 'U+1F44D')}
					isDisabled={!!reactions.length || !user}
					linkId={id}
					iconCode="U+1F44D"
					isBig
				/>
				<Reactions
					data={dislikes.aggregate.count}
					icon="/images/example/thumbs-down-big.png"
					isActive={!!(reactions.length && reactions[0].emoji === 'U+1F44E')}
					isDisabled={!!reactions.length || !user}
					linkId={id}
					iconCode="U+1F44E"
					isBig
				/>
			</Row>
		</Column>
	);
};
