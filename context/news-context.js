import { createContext } from 'react';

export const NewsContext = createContext({
	selectedNews: null,
	setSelectedNews: (_value) => {
		return;
	},
});
