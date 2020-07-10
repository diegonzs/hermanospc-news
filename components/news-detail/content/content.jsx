import * as React from 'react';
import Propstype from 'prop-types';
// @ts-ignore
import styles from './content.module.scss';

function createContent(newContent) {
	return {
		__html: newContent,
	};
}

export const Content = ({ content }) => {
	const newContent = content.replace('\n', '<br>');
	return (
		<div
			className={styles.NewDetailContentContainer}
			dangerouslySetInnerHTML={createContent(newContent)}
		/>
	);
};

Content.prototype = {
	content: Propstype.string.isRequired,
};
