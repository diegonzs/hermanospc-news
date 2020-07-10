import * as React from 'react';
import Propstype from 'prop-types';
// @ts-ignore
import styles from './content.module.scss';

function createContent(content) {
	return {
		__html: `${content}`,
	};
}

export const Content = ({ content }) => {
	return (
		<div
			className={styles.NewDetailContentContainer}
			dangerouslySetInnerHTML={createContent(content)}
		/>
	);
};

Content.prototype = {
	content: Propstype.string.isRequired,
};
