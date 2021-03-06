import React from 'react';
import { Tag } from './tag';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './list-tag.module.scss';

/**
 * @typedef {Object} ListTagProps
 * @property {string[]} tags - List of tags to be render
 * @property {string} [gap] - space between the grid elements
 */

/**
 * This is the tag component for the news section
 * @param {ListTagProps} props
 */
export const ListTag = ({ tags, gap = '10' }) => {
	return (
		<ul style={{ gridGap: `${gap}px` }} className={styles.listTag}>
			{tags && tags.map((t) => <Tag key={t} text={t} />)}
		</ul>
	);
};

ListTag.propTypes = {
	/**  List of tags to be render */
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	/**  Space between the tags */
	gap: PropTypes.string,
};

ListTag.defaultProps = {
	gap: '10',
};
