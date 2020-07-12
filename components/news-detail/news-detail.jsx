import * as React from 'react';
import PropTypes from 'prop-types';
import { ContentComponent } from './content';
import { BackButton } from 'components/back-button';
import { ListTag } from 'components/list-tag';
import { RelatedNews } from './related-news';
import { Reactions } from './reactions';

// @ts-ignore
import styles from './news-detail.module.scss';

const mainListTagProps = {
	tags: [{ text: 'AMD' }, { text: 'Graphic Card' }],
	gap: '20',
};

export const NewsDetail = ({ title, autor, image, content, onBack }) => {
	return (
		<div className={styles.container}>
			<div className={styles.NewsDetailContainer}>
				<div className={styles.header}>
					<div className={styles.backbutton}>
						<BackButton text="Back" handleClick={onBack} />
					</div>
					<div className={styles.tags}>
						<ListTag tags={mainListTagProps.tags} />
					</div>
				</div>
				<div className={styles.image}>
					<img src={image} />
				</div>
				<div className={styles.autor}>By {autor}</div>
				<div className={styles.title}>
					<h1>{title}</h1>
				</div>
				<ContentComponent content={content} />
			</div>
			<Reactions />
			<RelatedNews />
		</div>
	);
};

NewsDetail.propTypes = {
	title: PropTypes.string.isRequired,
	autor: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
