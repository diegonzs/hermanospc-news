import { createContext } from 'react';

export const NewsContext = createContext({
	/** @type {News | null} */
	selectedNews: null,
	/** @type {(value: News) => void} */
	setSelectedNews: (_value) => {
		return;
	},
	/** @type {() => void} */
	justCloseOverlay: () => null,
});
