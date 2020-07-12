const mainPath = '/images/sources-icon/';

export const getSourceIco = (source) => {
	switch (source) {
		case 'muycomputer':
			return `${mainPath}muycomputer.png`;
		default:
			return 'hola.png';
	}
};
