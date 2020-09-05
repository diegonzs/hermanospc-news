import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} rowProps
 * @property {string} [id] - Valu use to identify the row
 * @property {('flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around')} [justify] - value for justify-content property.
 * @property {('flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around')} [align] - value for align-items property.
 * @property {boolean} [isGrid] - Determine if the elements inside would be grid items.
 * @property {string} [gap] - If isGrid is true this property is used to separate the elements between them.
 * @property {React.CSSProperties} [customStyles] - custom styles
 * @property {string} [customClass] - custom class
 * @property {any} [children]
 */

/**
 * Useful component to align elements in one single row
 * @param {rowProps} props
 */
export const Row = ({
	children,
	justify = 'space-between',
	align = 'center',
	isGrid = false,
	gap = '0',
	customStyles,
	customClass,
	id,
}) => {
	/**
	 * @type {React.CSSProperties}
	 */
	const styles = isGrid
		? {
				display: 'grid',
				gridTemplateRows: '1fr',
				gridAutoFlow: 'column',
				gridAutoColumns: 'auto',
				gridColumnGap: `${gap}px`,
				width: 'fit-content',
				alignItems: align,
				...customStyles,
		  }
		: {
				display: 'flex',
				justifyContent: justify,
				alignItems: align,
				width: '100%',
				...customStyles,
		  };
	return (
		<div id={id} style={styles} className={customClass}>
			{children}
		</div>
	);
};

Row.propTypes = {
	/** value for justify-content property */
	justify: PropTypes.oneOf([
		'center',
		'space-between',
		'space-around',
		'flex-start',
		'flex-end',
	]),
	/** value for align-items property */
	align: PropTypes.oneOf([
		'center',
		'space-between',
		'space-around',
		'flex-start',
		'flex-end',
	]),
	/** Custom styles */
	customStyles: PropTypes.object,
	/** If isGrid is true this property is used to separate the elements between them. */
	gap: PropTypes.string,
	/** Determine if the elements inside would be grid items. */
	isGrid: PropTypes.bool,
	/** Value to identify the Row */
	id: PropTypes.string,
};

Row.defaultProps = {
	justify: 'space-between',
	align: 'center',
	isGrid: false,
	gap: '0',
};
