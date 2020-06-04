import React from 'react';
import {Tag} from './tag';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './list-tag.module.scss';

/**
 * @typedef {Object} ListTagProps
 * @property {import('./tag/tag').TagProps[]} tags - the array of texts that would be in the tag
 * @property {string} gap - space between the grid elements
 */
/**
 * This is the tag component for the news section
 * @param {ListTagProps} props
 */

export const ListTag = ({ tags, gap }) => {
    return (
   <ul style={{gridGap:`${gap}px`}} className={styles.listTag}>
       {tags.map(t=>(<Tag key={t.text} text={t.text} />))}
    </ul>
    )
  }
ListTag.propTypes = {
    /** the text that would be in the tag */
    tags: PropTypes.array.isRequired,
  }