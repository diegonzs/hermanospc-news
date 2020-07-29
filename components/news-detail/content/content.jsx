import * as React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import styles from './content.module.scss';

function createContent(newContent) {
	return {
		__html: newContent,
	};
}
/**
 * @typedef {Object} ContentComponentProps
 * @property {string} [content]
 */
/**
 * Component to show the content detail with the correct styles.
 * @param {ContentComponentProps} props
 */
export const ContentComponent = ({ content }) => {
	let newContent = '';
	if (content) {
		newContent = content.split('\\n').join('<br />');
	}
	return (
		<div
			className={styles.NewDetailContentContainer}
			dangerouslySetInnerHTML={createContent(newContent)}
		/>
	);
};

ContentComponent.propTypes = {
	content: PropTypes.string,
};
