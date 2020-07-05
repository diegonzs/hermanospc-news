import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
	options: {
		theme: themes.dark,
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});
