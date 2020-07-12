import * as React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import styles from './content.module.scss';

function createContent(newContent) {
	return {
		__html: newContent,
	};
}

export const ContentComponent = ({ content }) => {
	const newContent = content.replace('\n', '<br>');
	return (
		<div
			className={styles.NewDetailContentContainer}
			dangerouslySetInnerHTML={createContent(newContent)}
		/>
	);
};

ContentComponent.propTypes = {
	content: PropTypes.string.isRequired,
};
